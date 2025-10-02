import type {IFormInput} from "../../../types/form-input-type.ts";
import type {SelectOptionType} from "./select-option-type.ts";


export interface SelectFieldProps<T>
    extends Pick<IFormInput, "label" | "error" | "name" | "disabled" | "required" | "onBlur" | "ref" | "placeholder"> {
    onChange?: (value: SelectOptionType | null) => void;
    value?: SelectOptionType | null;
    onClear?: () => void;
    className?: string;
    isAutoComplete?: boolean;
    uri?: string;
    fetchKey?: string;
    mapOptions?: (data: T[]) => SelectOptionType[];
    options: SelectOptionType[];
}