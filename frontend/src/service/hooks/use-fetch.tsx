import {ApiService} from "../api-service.ts";
import {useQuery, type UseQueryOptions} from "@tanstack/react-query";
import {useMemo} from "react";


interface FetchState<T> {
    uri: string;
    options: UseQueryOptions<T, Error, T, readonly unknown[]>,
    params?: Record<string, unknown>;
}

export default function useFetch<T>(props: Readonly<FetchState<T>>){
    const {
        options,
        uri,
        params,
    } = props;
    
    const apiService = useMemo(() =>
            new ApiService<T>(uri), [uri]);
    
    const fetchQuery = (): Promise<T> => {
        const queries = params ? Object.entries(params)
            .map(([key, value]) => `${key}=${value}`).join('&') : undefined;
        
        return apiService.get(queries) as Promise<T>;
    }
    
    return useQuery({
        ...options,
        queryFn: fetchQuery,
    });
}