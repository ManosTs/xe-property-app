import {SelectTrigger} from "../../../ui/Select.tsx";
import type {SelectFieldProps} from "./types/select-field-props.ts";


type SelectFieldTriggerProps<T> = Pick<SelectFieldProps<T>, "value" | "placeholder">
export default function SelectTriggerField<T>(props: Readonly<SelectFieldTriggerProps<T>>){
    const {
        placeholder,
        value: inputValue
    } = props;
    
    return(
        <SelectTrigger>
            {placeholder && inputValue?.key == null ? (
                <span className={'text-gray-400'}>{placeholder}</span>
            ) : null}
            {inputValue?.key != null ? (
                <span>{inputValue.value}</span>
            ) : null}
        </SelectTrigger>
    )
}