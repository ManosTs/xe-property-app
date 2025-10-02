import {Controller, useFormContext} from "react-hook-form";
import type {TextFieldProps} from "./types/text-field.props.ts";
import {PlainTextField} from "./PlainTextField.tsx";
import {cn} from "../../../../lib/utils.ts";


export default function TextField(props: Readonly<TextFieldProps>) {
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
                <PlainTextField
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