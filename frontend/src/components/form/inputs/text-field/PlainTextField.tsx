import type {TextFieldProps} from "./types/text-field.props.ts";
import {Input} from "../../../ui/Input.tsx";
import {Label} from "../../../ui/Label.tsx";


export const PlainTextField = (
    (props: TextFieldProps) => {
        const {
            name,
            error,
            label,
            required,
            value,
            ...rest
        } = props;
        
        return (
            <div className={'flex flex-col w-full'}>
                {label != null ?
                    <Label htmlFor={name}>
                        {label}{" "}
                        {required ? <span className={'text-red-600'}>*</span> : null}
                    </Label>
                    : null}
                
                <Input
                    {...rest}
                    value={value ?? ""}
                    name={name}
                />
                {error != null ?
                    <p className={'text-red-600'}>{error}</p>
                    : null}
            </div>
        )
    }
)