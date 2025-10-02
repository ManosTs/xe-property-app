import type {FormProps} from "./types/form-props.ts";
import FormAppProvider from "./FormAppProvider.tsx";
import type {FieldValues} from "react-hook-form";


export default function Form<TFormValues extends FieldValues>(props: Readonly<FormProps<TFormValues>>) {
   return <FormAppProvider {...props}/>;
}