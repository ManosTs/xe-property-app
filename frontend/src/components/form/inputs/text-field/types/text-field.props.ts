import type {IFormInput} from "../../../types/form-input-type.ts";


export interface TextFieldProps extends IFormInput {
    label?: string;
    placeholder?: string;
}