import type {ComponentProps} from "react";
import type {IFormInput} from "../../../types/form-input-type.ts";


export type TextAreaFieldProps = ComponentProps<"textarea"> & Pick<IFormInput, "error" | "label" | "name" | "value">