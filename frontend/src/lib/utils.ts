import {twMerge} from "tailwind-merge";
import {clsx, type ClassValue} from "clsx";

export const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs))
}


export const searchStringLocalization = (value: string) => {
    if(value == null || value?.length === 0) return "";
    return value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();
}