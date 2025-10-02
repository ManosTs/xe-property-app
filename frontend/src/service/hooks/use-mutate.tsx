import {useMutation, type UseMutationOptions} from "@tanstack/react-query";
import {ApiService} from "../api-service.ts";
import {useMemo} from "react";

interface MutateState<T, V> {
    uri: string;
    method: keyof Pick<ApiService<T>, "post" | "put" | "delete">
    options?: UseMutationOptions<T, unknown, V>;
}
export default function useMutate<T, V = Partial<T>>(props: Readonly<MutateState<T, V>>){
    const {
        uri,
        options,
        method
    } = props;
    
    const apiService = useMemo(() => new ApiService<T>(uri), [uri]);
    
    return useMutation<T, unknown, V>({
        ...options,
        mutationFn: (variables) => {
            return (apiService[method] as (arg: V) => Promise<T>)(variables);
        }
    })
}