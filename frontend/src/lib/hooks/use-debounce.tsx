import {useEffect, useRef} from "react";

type Timer = ReturnType<typeof setTimeout>;


export default function useDebounce<F extends (...args: Parameters<F>) => ReturnType<F>>(
    func: F,
    delay = 500
){
    const timer = useRef<Timer | null>(null);
    
    useEffect(() => {
        return () => {
            if(!timer.current) return;
            clearTimeout(timer.current);
        }
    }, []);
    
    const debounceFunc = ((...args: Parameters<F>) => {
        const newTimer = setTimeout(() => {
            func(...args);
        }, delay);
        clearTimeout(timer.current!);
        timer.current = newTimer;
    });
    
    return debounceFunc;
}