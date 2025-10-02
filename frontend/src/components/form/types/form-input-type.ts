import type {ComponentProps} from "react";


export interface IFormInput extends ComponentProps<"input">{
    name: string;
    error?: string;
    value?: string | number;
    label?: string;
}