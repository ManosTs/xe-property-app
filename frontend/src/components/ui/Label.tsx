import {type ComponentPropsWithoutRef, type ComponentRef, forwardRef} from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

export const Label = forwardRef<ComponentRef<typeof LabelPrimitive.Root>, ComponentPropsWithoutRef<typeof LabelPrimitive.Root>>(
    ({className, ...props}, ref) => (
        <LabelPrimitive.Root
            ref={ref}
            className={className}
            {...props}
        />
    )
)