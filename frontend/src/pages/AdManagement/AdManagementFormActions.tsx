import {Button} from "../../components/ui/Button.tsx";
import {CardFooter} from "../../components/ui/Card.tsx";
import {useFormContext} from "react-hook-form";
import {useCallback, useEffect} from "react";


export default function AdManagementFormActions() {
    const {formState: {isDirty, isValid, isSubmitSuccessful, isSubmitting}, reset} = useFormContext();
    
    const handleReset = useCallback(() => {
        reset({
            title: "",
            price: null,
            type: null,
            area: null,
            description: "",
        })
    }, [reset]);
    
    useEffect(() => {
        if (isSubmitSuccessful) {
            handleReset()
        }
    }, [handleReset, isSubmitSuccessful])
    
    return (
        <CardFooter className={'flex items-center justify-center flex-wrap col-span-full gap-4'}>
            <Button
                loading={isSubmitting}
                type={'submit'}
                className={'w-full'}
                disabled={!isValid || !isDirty || isSubmitting}
            >
                Submit
            </Button>
            <Button className={'bg-gray-400 w-full'} onClick={handleReset}>
                Clear
            </Button>
        </CardFooter>
    );
}