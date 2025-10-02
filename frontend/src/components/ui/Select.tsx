import * as SelectPrimitive from '@radix-ui/react-select';
import {type ComponentPropsWithoutRef, type ComponentRef, forwardRef} from "react";
import {cn} from "@/lib/utils.ts";
import {CaretDownIcon, CheckIcon} from "@radix-ui/react-icons";

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;

const SelectTrigger = forwardRef<ComponentRef<typeof SelectPrimitive.Trigger>, ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>>(
    ({className, children, ...props}, ref) => (
        <SelectPrimitive.Trigger
            ref={ref}
            className={cn("flex px-3 py-2 bg-white focus:outline-none cursor-pointer border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent min-h-10 w-full items-center justify-between rounded-sm",className)}
            {...props}
        >
            {children}
            <SelectPrimitive.Icon asChild className={'ml-auto w-5 h-5'}>
                <CaretDownIcon />
            </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>
    )
);

const SelectScrollUpButton = forwardRef<ComponentRef<typeof SelectPrimitive.ScrollUpButton>, ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>>(
    ({className, ...props}, ref) => (
        <SelectPrimitive.ScrollUpButton
            ref={ref}
            className={cn("flex items-center justify-center h-6 bg-white cursor-default", className)}
            {...props}
        >
            <CaretDownIcon className={'rotate-180'} />
        </SelectPrimitive.ScrollUpButton>
    )
);

const SelectScrollDownButton = forwardRef<ComponentRef<typeof SelectPrimitive.ScrollDownButton>, ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>>(
    ({className, ...props}, ref) => (
        <SelectPrimitive.ScrollDownButton
            ref={ref}
            className={cn("flex items-center justify-center h-6 bg-white cursor-default", className)}
            {...props}
        >
            <CaretDownIcon />
        </SelectPrimitive.ScrollDownButton>
    )
);

const SelectContent = forwardRef<ComponentRef<typeof SelectPrimitive.Content>, ComponentPropsWithoutRef<typeof SelectPrimitive.Content>>(
    ({className, children, position = "popper", ...props}, ref) => (
        <SelectPrimitive.Portal>
            <SelectPrimitive.Content
                ref={ref}
                className={cn("bg-white border max-h-96 overflow-hidden w-full border-gray-300 rounded shadow-md", className)}
                position={position}
                {...props}
            >
                <SelectScrollUpButton />
                <SelectPrimitive.Viewport className="p-2 w-full min-w-[var(--radix-select-trigger-width)] h-[var(--radix-select-trigger-height)]">
                    {children}
                </SelectPrimitive.Viewport>
                <SelectScrollDownButton />
            </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
    )
)

const SelectLabel = forwardRef<ComponentRef<typeof SelectPrimitive.Label>, ComponentPropsWithoutRef<typeof SelectPrimitive.Label>>(
    ({className, ...props}, ref) => (
        <SelectPrimitive.Label
            ref={ref}
            className={cn("py-1 px-2 text-sm font-medium", className)}
            {...props}
        />
    )
);

const SelectItem = forwardRef<ComponentRef<typeof SelectPrimitive.Item>, ComponentPropsWithoutRef<typeof SelectPrimitive.Item>>(
    ({className, children, ...props}, ref) => (
        <SelectPrimitive.Item
            ref={ref}
            className={cn("relative flex items-center rounded-sm outline-none hover:bg-gray-100 transition ease-in-out py-1.5 px-2 cursor-pointer select-none data-[disabled]:text-gray-400 data-[disabled]:pointer-events-none", className)}
            {...props}
        >
            <SelectPrimitive.ItemText>
                {children}
            </SelectPrimitive.ItemText>
            <SelectPrimitive.ItemIndicator className="w-5 inline-flex ml-auto items-center justify-center">
               <CheckIcon/>
            </SelectPrimitive.ItemIndicator>
        </SelectPrimitive.Item>
    )
);


const SelectSeparator = forwardRef<ComponentRef<typeof SelectPrimitive.Separator>, ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>>(
    ({className, ...props}, ref) => (
        <SelectPrimitive.Separator
            ref={ref}
            className={cn("h-px bg-gray-200 my-1", className)}
            {...props}
        />
    )
);

export {
    Select,
    SelectGroup,
    SelectValue,
    SelectTrigger,
    SelectContent,
    SelectLabel,
    SelectItem,
    SelectSeparator,
    SelectScrollUpButton,
    SelectScrollDownButton
}