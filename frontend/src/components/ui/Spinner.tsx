import {motion} from "framer-motion";
import {cn} from "@/lib/utils.ts";
import type {HTMLAttributes} from "react";


export const Spinner = ({className}: HTMLAttributes<HTMLDivElement>) => {
    return (
        <motion.div
            animate={{rotate: 360}}
            transition={{repeat: Infinity, duration: 1, ease: "linear"}}
            className={cn("w-12 h-12 border-[2px] p-2 border-gray-200 border-t-blue-500 rounded-full", className)}
        />
    );
}