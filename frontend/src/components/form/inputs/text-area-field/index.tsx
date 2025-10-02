import {Controller, useFormContext} from "react-hook-form";
import {PlainTextAreaField} from "./PlainTextAreaField.tsx";
import type {TextAreaFieldProps} from "./types/text-area-field.props.ts";
import {cn} from "@/lib/utils.ts";


export default function TextAreaField(props: Readonly<TextAreaFieldProps>) {
    const {control} = useFormContext();
    const {
        name,
        className,
        ...rest
    } = props;
    return (
        <div className={cn('w-full col-span-full', className)}>
            <Controller name={name} control={control} render={({
                                                                   field: {onChange, onBlur, value, ref, ...field},
                                                                   fieldState: {error}
                                                               }) => (
                <PlainTextAreaField
                    {...field}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    name={name}
                    ref={ref}
                    error={error?.message}
                    {...rest}
                />
            )}/>
        </div>
    )
}