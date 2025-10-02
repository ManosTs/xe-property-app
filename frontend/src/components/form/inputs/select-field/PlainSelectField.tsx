import type {SelectFieldProps} from "./types/select-field-props.ts";
import {Label} from "../../../ui/Label.tsx";
import {Select} from "../../../ui/Select.tsx";
import {useState} from "react";
import SelectTriggerField from "./SelectTriggerField.tsx";
import SelectContentField from "./SelectContentField.tsx";
import type {SelectOptionType} from "./types/select-option-type.ts";


export default function PlainSelectField<T>(props: Readonly<SelectFieldProps<T>>) {
    const {
        name,
        label,
        required,
        error,
        value: inputValue,
        disabled,
        placeholder,
        options: defaultOptions,
        isAutoComplete,
        onChange,
        fetchKey,
        mapOptions,
        uri
    } = props;
    
    const [open, setOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [options, setOptions] = useState<SelectOptionType[]>(defaultOptions);
    return (
        <div className={'flex flex-col w-full'}>
            {label != null ?
                <Label htmlFor={name}>
                    {label}{" "}
                    {required ? <span className={'text-red-600'}>*</span> : null}
                </Label>
                : null}
            
            <Select
                disabled={disabled}
                name={name}
                open={open}
                onOpenChange={(open) => {
                    if (!open) {
                        setSearchTerm("");
                        if (isAutoComplete) setOptions(defaultOptions ?? [])
                    }
                    setOpen(open);
                }}
                value={inputValue?.key?.toString() ?? ""}
                onValueChange={(value) => {
                    const option =
                        options.find((option) => option.key?.toString() === value);
                    if (onChange) {
                        onChange(option ?? null)
                    }
                    
                    //in case that there is default value and option is undefined
                    if (onChange &&
                        option == null &&
                        value?.trim()?.length === 0 &&
                        inputValue?.key != null) {
                        onChange(inputValue)
                    }
                }}
            >
                <SelectTriggerField value={inputValue} placeholder={placeholder}/>
                <SelectContentField
                    options={options}
                    isAutoComplete={isAutoComplete}
                    filteredOptions={options}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    uri={uri}
                    fetchKey={fetchKey}
                    mapOptions={mapOptions}
                    setFilteredOptions={setOptions}
                />
            </Select>
            {error != null ?
                <p className={'text-red-600'}>{error}</p>
                : null}
        </div>
    );
}