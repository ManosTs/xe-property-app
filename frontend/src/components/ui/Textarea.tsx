import {type ComponentProps, forwardRef} from "react";
import {cn} from "../../lib/utils.ts";


export const Textarea = forwardRef<HTMLTextAreaElement, ComponentProps<"textarea">>(
    ({className, ...props}, ref) => {
        return (
            <textarea
                className={cn("flex bg-white resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent min-h-44 w-full rounded-sm px-4 py-2 text-base border border-gray-300",className)}
                ref={ref}
                {...props}
            />
        );
    }
)