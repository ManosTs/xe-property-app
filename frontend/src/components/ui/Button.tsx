import {type ButtonHTMLAttributes, forwardRef} from "react";
import {cn} from "@/lib/utils.ts";
import {Spinner} from "./Spinner.tsx";

export interface ButtonProps
extends ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean;
    loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({className, children, asChild = false, loading, ...props}, ref) => {
        const Comp = asChild ? 'span' : 'button';
        return (
            <Comp
                className={cn(`px-4 sm:w-[120px] flex items-center justify-center gap-2 disabled:pointer-none disabled:cursor-not-allowed disabled:bg-gray-300 transition-all ease-in-out py-2 cursor-pointer bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75`, className)}
                ref={ref}
                {...props}
            >
                {loading ? <Spinner className={'w-4 h-4 p-1'}/> : null}
                {children}
            </Comp>
        );
    }
)