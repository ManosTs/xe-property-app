import {NavLink} from "react-router-dom";

interface NavigationLinkProps {
    title: string;
    path: string;
}

export default function NavigationLink(props: Readonly<NavigationLinkProps>) {
    
    const {
        title,
        path
    } = props;
    
    return (
        <NavLink to={path} className={({isActive}) =>
            (isActive ? 'border-b-1 px-4 py-1 md:text-base text-sm text-white' :
                'px-4 py-1 md:text-base text-sm border-b-1 border-blue-400 text-white')}>{title}
        </NavLink>
    )
}