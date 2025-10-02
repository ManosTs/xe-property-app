import {forwardRef, type HTMLAttributes} from "react";
import {cn} from "@/lib/utils.ts";

const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({className, ...props}, ref) => (
        <div
            ref={ref}
            className={cn("border border-gray-300 p-8",className)}
            {...props}
        />
    )
)

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({className, ...props}, ref) => (
        <div
            ref={ref}
            className={cn("flex flex-col pb-2", className)}
            {...props}
        />
    )
);

const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
    ({className, ...props}, ref) => (
        <h3
            ref={ref}
            className={cn("text-lg border-b-1 py-2 px-5 w-full text-center mb-2 font-semibold leading-none tracking-tight", className)}
            {...props}
        />
    )
);

const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
    ({className, ...props}, ref) => (
        <p
            ref={ref}
            className={cn("text-sm text-gray-700", className)}
            {...props}
        />
    )
);

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({className, ...props}, ref) => (
        <div
            ref={ref}
            className={cn("pb-2 w-full pt-0", className)}
            {...props}
        />
    )
);

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({className, ...props}, ref) => (
        <div
            ref={ref}
            className={cn("flex items-center pt-2", className)}
            {...props}
        />
    )
);


export {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter
}