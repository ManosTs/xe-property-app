import axios, {type AxiosError, type AxiosInstance} from "axios";
import {toast} from "react-toastify";
import type {HttpErrorResponse} from "./types/http-error-response.ts";

export class ApiService<T> {
    private api: AxiosInstance;
    private readonly uri: string;
    private url  = "http://localhost:8080/api"

    constructor(uri: string) {
        this.api = axios.create({baseURL: this.url});
        this.uri = uri;
    }
    
    get = (params?: string) =>
        this.api.get<T>(params ? `/${this.uri}?${params}` : `/${this.uri}`)
            .then((response) => response.data)
            .catch((error: AxiosError<HttpErrorResponse>) => {
                console.error(error);
                toast.error(error.response?.data?.message ?? error?.message);
            });
    
    post = (data: Partial<T>) =>
        this.api.post<T>(`/${this.uri}`, data)
            .then((response) => response.data)
            .catch((error: AxiosError<HttpErrorResponse>) => {
                console.error(error);
                toast.error(error.response?.data?.message ?? error?.message);
            });
    
    put = (data: Partial<T>) =>
        this.api.put<T>(`/${this.uri}`, data)
            .then((response) => response.data)
            .catch((error: AxiosError<HttpErrorResponse>) => {
                console.error(error);
                toast.error(error.response?.data?.message ?? error?.message);
            });
    
    delete = (id: string| number) =>
        this.api.delete<T>(`/${this.uri}/${id}`)
            .then((response) => response.data)
            .catch((error: AxiosError<HttpErrorResponse>) => {
                console.error(error);
                toast.error(error.response?.data?.message ?? error?.message);
            });
}