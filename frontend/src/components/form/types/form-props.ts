import type {PropsWithChildren} from "react";
import type {FieldValues, SubmitHandler, UseFormProps} from "react-hook-form";
import type {InferType, ObjectSchema} from "yup";

export interface FormProps<TFormValues extends FieldValues> extends PropsWithChildren{
    onSubmit: SubmitHandler<TFormValues>;
    name: string;
    formConfig?: UseFormProps<InferType<ObjectSchema<TFormValues>>>;
    schema?: ObjectSchema<TFormValues>;
    className?: string;
}