import type {SelectFieldProps} from "./types/select-field-props.ts";
import {Controller, useFormContext} from "react-hook-form";
import PlainSelectField from "./PlainSelectField.tsx";
import {cn} from "../../../../lib/utils.ts";


export default function SelectField<T>(props: Readonly<SelectFieldProps<T>>) {
    const {
        name,
        className,
        ...rest
    } = props;
    
    const {control} = useFormContext();
    return (
        <div className={cn('w-full col-span-full', className)}>
            <Controller name={name} control={control} render={({
                                                                   field: {onChange, onBlur, value, ref, ...field},
                                                                   fieldState: {error}
                                                               }) => (
                <PlainSelectField
                    {...field}
                    value={value}
                    name={name}
                    onChange={onChange}
                    onBlur={onBlur}
                    ref={ref}
                    error={error?.message}
                    {...rest}
                />
            )}/>
        </div>
    );
}