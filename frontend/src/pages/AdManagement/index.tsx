import {Card, CardContent, CardTitle} from "../../components/ui/Card.tsx";
import AdManagementForm from "./AdManagementForm.tsx";


export default function AdManagement() {
    return (
        <Card className={'max-w-[500px] mx-auto mt-5 bg-gray-50 px-2 sm:px-4 flex items-center flex-col gap-2'}>
            <CardTitle>
                New Property Ad
            </CardTitle>
            <CardContent>
                <AdManagementForm/>
            </CardContent>
        </Card>
    )
}