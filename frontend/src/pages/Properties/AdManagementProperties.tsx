import useFetch from "../../service/hooks/use-fetch.tsx";
import type {IProperty} from "@/models/property.model.ts";
import {Card, CardContent, CardTitle} from "@/components/ui/Card.tsx";
import {CrossCircledIcon, Pencil1Icon} from "@radix-ui/react-icons";
import {Link} from "react-router-dom";
import useMutate from "../../service/hooks/use-mutate.tsx";


export default function AdManagementProperties() {
    const {data, refetch} = useFetch<IProperty[]>({
        uri: 'properties',
        options: {
            queryKey: ['ads']
        }
    })
    
    const {mutateAsync} = useMutate({
        uri: 'properties',
        method: 'delete'
    })
    const handleDelete = async (id: number) => {
        console.log("Delete", id)
        const res = await mutateAsync(id);
        if (res) {
            refetch();
        }
    }
    return <Card className={'bg-white'}>
        <CardTitle>
            Properties
        </CardTitle>
        <CardContent>
            <div className="w-full overflow-x-auto">
                <div className={'my-2'}>
                    <Link to={'/ad-management'} className={'text-sm sm:text-base bg-blue-400 text-white rounded px-2 py-1'}>
                        Add Property
                    </Link>
                </div>
                <div>
                    <table className="min-w-full border-collapse table-auto">
                        <caption className="sr-only">List of items</caption>
                        <thead>
                        <tr className="bg-gray-50">
                            <th scope="col" className="text-left p-3 text-sm font-medium">Title</th>
                            <th scope="col" className="text-left p-3 text-sm font-medium">Price</th>
                            <th scope="col" className="text-left p-3 text-sm font-medium">Type</th>
                            <th scope="col" className="text-left p-3 text-sm font-medium">Place</th>
                            <th scope="col" className="text-left p-3 text-sm font-medium">Description</th>
                            <th scope={"col"} className={"text-left p-3 text-sm font-medium"}>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data?.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="p-3 text-sm text-gray-500">
                                    No items to display.
                                </td>
                            </tr>
                        ) : (
                            data?.map((row, idx) => (
                                <tr
                                    key={idx}
                                    className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                                >
                                    <td className="p-3 text-sm font-medium">{row.title}</td>
                                    <td className="p-3 text-sm">{row.price}</td>
                                    <td className="p-3 text-sm">{row.typeDescription}</td>
                                    <td className="p-3 text-sm">{row.placeDescription}</td>
                                    <td className="p-3 text-sm">{row.description}</td>
                                    <td className={"p-3 text-sm"}>
                                        <div className="flex items-center justify-start gap-4">
                                            <Link to={`/ad-management/${row.id}`}>
                                                <Pencil1Icon className={'w-5 h-5 cursor-pointer'}/>
                                            </Link>
                                            
                                            <CrossCircledIcon onClick={() => handleDelete(row?.id)}
                                                              className={'w-5 h-5 cursor-pointer'} color={'red'}/>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        </CardContent>
    
    </Card>
}