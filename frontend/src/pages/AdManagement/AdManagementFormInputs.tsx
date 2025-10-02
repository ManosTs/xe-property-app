import TextField from "../../components/form/inputs/text-field";
import SelectField from "../../components/form/inputs/select-field";
import TextAreaField from "../../components/form/inputs/text-area-field";
import {Fragment, useEffect} from "react";
import {propertyTypes} from "@/lib/mock/property-types.ts";
import {useParams} from "react-router-dom";
import useFetch from "../../service/hooks/use-fetch.tsx";
import type {IProperty} from "@/models/property.model.ts";
import {useFormContext} from "react-hook-form";
import type {IExternalAreas} from "@/models/external-areas.model.ts";

export default function AdManagementFormInputs() {
    const {reset} = useFormContext();
    const {id} = useParams();
    
    const {data} = useFetch<IProperty>({
        uri: `properties/${id}`,
        options: {
            queryKey: ["property", id],
            enabled: id != null
        }
    })
    
    //set default values on edit page
    useEffect(() => {
        reset({
            id: data?.id,
            title: data?.title,
            price: data?.price,
            type: data?.type != null ? {key: data.type, value: data.typeDescription} : undefined,
            area: data?.placeId != null ? {key: data.placeId, value: data.placeDescription} : undefined,
            description: data?.description
        })
    }, [data, reset]);
    
    return (
        <Fragment>
            <TextField name="title" label="Title" required placeholder={'Classified title up to 155 chars'}/>
            <TextField name="price" label="Price in Euros" type={'number'} required placeholder={'Amount'}/>
            <SelectField placeholder={'Select Type'}
                         options={propertyTypes}
                         name={'type'}
                         label={'Type'} required/>
            <SelectField placeholder={'Search Area'}
                         options={[]}
                         name={'area'}
                         fetchKey={'area'}
                         uri={'external/areas'}
                         mapOptions={(data: IExternalAreas[]) =>
                             data.map((area) => ({
                                 key: area.placeId,
                                 value: area.mainText + ", " + area.secondaryText
                             }))}
                         isAutoComplete
                         label={'Area'} required/>
            <TextAreaField name={'description'} label={'Extra Description'} placeholder={'Type Here'}/>
        </Fragment>
    );
}