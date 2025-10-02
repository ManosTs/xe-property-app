import {type ComponentProps, forwardRef} from "react";
import {cn} from "@/lib/utils.ts";


export const Input = forwardRef<HTMLInputElement, ComponentProps<"input">>(
    ({className, ...props}, ref) => {
        return (
            <input
                className={cn(`px-3 py-2 border bg-white w-full border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent`, className)}
                ref={ref}
                {...props}
            />
        );
    }
)