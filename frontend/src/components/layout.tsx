import type {PropsWithChildren} from "react";
import NavigationLink from "./navigation-link.tsx";

type LayoutProps = PropsWithChildren
export default function Layout(props: Readonly<LayoutProps>){
    const {children} = props;
    
    return (
        <div className={'w-full'}>
            <nav className={'flex items-center justify-start gap-4 p-3 bg-blue-400'}>
                <NavigationLink title={'Home'} path={'/'}/>
                <NavigationLink title={'Create Property'} path={'/ad-management'}/>
                <NavigationLink title={'My Properties'} path={'/my-properties'}/>
            </nav>
            
            {children}
        </div>
    )
}