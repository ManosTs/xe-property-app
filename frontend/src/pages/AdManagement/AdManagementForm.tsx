import Form from "../../components/form";
import {AdManagementFormInputs} from "./AdManagementFormInputs.tsx";
import * as yup from "yup";
import AdManagementFormActions from "./AdManagementFormActions.tsx";
import type {SelectOptionType} from "../../components/form/inputs/select-field/types/select-option-type.ts";
import useMutate from "../../service/hooks/use-mutate.tsx";
import type {IProperty} from "../../models/property.model.ts";
import {toast} from "react-toastify";
import {useNavigate, useParams} from "react-router-dom";

interface FormData {
    id?: number;
    title: string;
    price: number;
    type: SelectOptionType | Record<string, unknown>;
    area: SelectOptionType | Record<string, unknown>;
    description?: string | null | undefined;
}

export default function AdManagementForm() {
    const navigate = useNavigate();
    const formSchema = yup.object().shape({
        title: yup.string()
            .test('len', 'Must be less than 155 characters',
                val => val != null && val.length <= 155)
            .required('Title is required'),
        price: yup.number().required('Price is required'),
        type: yup.object<SelectOptionType>()
            .typeError('Type is required')
            .required('Type is required'),
        area: yup.object<SelectOptionType>()
            .typeError('Area is required')
            .required('Area is required'),
        description: yup.string()
            .nullable()
            .optional()
            .test(
                'len',
                'Must be less than 500 characters',
                val => val != null && val?.trim()?.length <= 500
            )
    });
    
    const {id} = useParams();
    
    
    const {mutateAsync: postForm} = useMutate<IProperty>({uri: "properties", method: 'post'});
    const {mutateAsync: updateForm} = useMutate<IProperty>({uri: `properties/${id}`, method: 'put'});
    
    const handleSubmit = async (data: FormData): Promise<void> => {

        const body = {
            id: data?.id,
            title: data.title,
            price: data.price,
            type: data.type.key as number,
            placeId: data.area.key as string,
            typeDescription: data.type.value as string,
            placeDescription: data.area.value as string,
            description: data.description
        }
        if(data?.id == null){
            const res = await postForm(body);
            
            if (res?.placeId != null) {
                toast.success('Property Ad created successfully.');
                navigate('/my-properties');
            }
        }
        
        if(data?.id != null){
            const res = await updateForm(body);
            
            if (res?.id != null) {
                toast.success('Property Ad updated successfully.');
                navigate('/my-properties');
            }
        }
        
    }
    
    return (
        <Form
            onSubmit={handleSubmit}
            formConfig={{
                mode: 'all'
            }}
            schema={formSchema}
            name={'AdManagement-form'}
        >
            <AdManagementFormInputs/>
            <p className={'text-sm text-gray-500 col-span-full'}>Fields with * are required</p>
            <AdManagementFormActions/>
        </Form>
    )
}