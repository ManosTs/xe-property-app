import {type FieldValues, FormProvider, useForm} from "react-hook-form";
import type {FormProps} from "./types/form-props.ts";
import {type FormEvent, useCallback} from "react";
import {cn} from "../../lib/utils.ts";
import {yupResolver} from "@hookform/resolvers/yup";
import type {ObjectSchema} from "yup";


export default function FormAppProvider<TFormValues extends FieldValues>(props: Readonly<FormProps<TFormValues>>) {
    const {
        formConfig,
        onSubmit,
        name,
        children,
        className,
        schema
    } = props;
    
    const form = useForm({
        ...formConfig,
        resolver: yupResolver(schema as ObjectSchema<TFormValues>),
    });
    
    const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
        void form.handleSubmit(onSubmit)(event);
    }, [form, onSubmit]);
    
    return (
        <FormProvider {...form}>
            <form
                onSubmit={handleSubmit}
                name={name}
                className={cn("grid grid-cols-1 md:grid-cols-2 gap-4 w-full", className)}
                id={name}
            >
                {children}
            </form>
        </FormProvider>
    )
}