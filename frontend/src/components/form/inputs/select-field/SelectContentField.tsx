import {SelectContent, SelectGroup, SelectItem} from "../../../ui/Select.tsx";
import type {SelectFieldProps} from "./types/select-field-props.ts";
import {Input} from "../../../ui/Input.tsx";
import {type Dispatch, Fragment, type SetStateAction, type SyntheticEvent, useState} from "react";
import type {SelectOptionType} from "./types/select-option-type.ts";
import useFetch from "../../../../service/hooks/use-fetch.tsx";
import {Spinner} from "../../../ui/Spinner.tsx";
import useDebounce from "@/lib/hooks/use-debounce.tsx";


interface SelectFieldTriggerProps<T> extends Pick<SelectFieldProps<T>, "options" | "isAutoComplete" | "uri" | "fetchKey" | "mapOptions"> {
    searchTerm: string;
    setSearchTerm: Dispatch<SetStateAction<string>>;
    filteredOptions: SelectOptionType[];
    setFilteredOptions: Dispatch<SetStateAction<SelectOptionType[]>>
}

export default function SelectContentField<T>(props: Readonly<SelectFieldTriggerProps<T>>) {
    const {
        filteredOptions,
        searchTerm,
        setSearchTerm,
        isAutoComplete,
        uri,
        fetchKey,
        mapOptions,
        setFilteredOptions,
    } = props;
    
    const [loading, setLoading] = useState<boolean>(false);
    
    const {refetch} = useFetch<T[]>({
        uri: uri ?? "",
        params: {[fetchKey ?? ""]: searchTerm},
        options: {
            enabled: false,
            queryKey: ['external-areas']
        },
        
    });
    
    const handleAutocompleteSearch = async (value: string) => {
        if(value == null || value == "" || value?.trim()?.length === 0) {
            setFilteredOptions([]);
            return;
        }
        if (value?.trim()?.length > 0 && value?.trim()?.length > 3 && isAutoComplete) {
            setLoading(true);
            setFilteredOptions([]);
            try{
                const {data} = await refetch();
                if(mapOptions != null)
                    setFilteredOptions(mapOptions(data ?? []));
            }catch(e){
                console.error(e);
                setFilteredOptions([]);
            }finally {
                setLoading(false);
            }
            
        }
    }
    
    const debounceAutocompleteSearch = useDebounce(handleAutocompleteSearch);
    const onInputSearch = async (event: SyntheticEvent<HTMLInputElement>) => {
        const value = (event.target as HTMLInputElement).value
        
        setSearchTerm(value);
        
        debounceAutocompleteSearch(value);
    }
    
    return (
        <SelectContent>
            <SelectGroup>
                <div className={'w-full'}>
                    {isAutoComplete ? <Input
                        onInput={onInputSearch}
                        onKeyDown={(event: SyntheticEvent<HTMLInputElement>) => event.stopPropagation()}
                        type={'text'}
                        className={'py-2'}
                        value={searchTerm}
                        placeholder={'Search...'}
                    /> : null}
                    {filteredOptions.map((option) => (
                        <SelectItem
                            key={option?.key?.toString()}
                            value={option.key?.toString()}
                            onPointerLeave={(event) => event.stopPropagation()}
                            onPointerMove={(event) => event.stopPropagation()}
                        >
                            {option.value}
                        </SelectItem>
                    ))}
                    {loading ? <div className={'p-2 flex items-center justify-center'}>
                        <Spinner className={'w-6 h-6'}/>
                    </div> : null}
                    {filteredOptions.length === 0 ? (
                        <Fragment>
                            {!loading ? <p className={'p-2 text-center'}>{"No options"}</p> : null}
                        </Fragment>
                    ) : null}
                </div>
            </SelectGroup>
        </SelectContent>
    )
}