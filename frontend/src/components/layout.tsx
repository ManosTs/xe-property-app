import type {PropsWithChildren} from "react";
import NavigationLink from "./navigation-link.tsx";

type LayoutProps = PropsWithChildren
export default function Layout(props: Readonly<LayoutProps>){
    const {children} = props;
    
    return (
        <div className={'w-full'}>
            <div className={'flex items-center justify-start gap-4 m-3'}>
                <NavigationLink title={'Home'} path={'/'}/>
                <NavigationLink title={'Create Property'} path={'/ad-management'}/>
                <NavigationLink title={'My Properties'} path={'/my-properties'}/>
            </div>
            
            {children}
        </div>
    )
}