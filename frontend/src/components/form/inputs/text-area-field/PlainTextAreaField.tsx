
import {Label} from "../../../ui/Label.tsx";
import {Textarea} from "../../../ui/Textarea.tsx";
import type {TextAreaFieldProps} from "./types/text-area-field.props.ts";


export const PlainTextAreaField = (
    (props: TextAreaFieldProps) => {
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
                
                <Textarea
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