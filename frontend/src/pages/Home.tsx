import {Link} from "react-router-dom";

export default function Home() {
    
    return (
        <div className={'flex flex-col items-center justify-center mt-2'}>
            <h1 className={'text-4xl font-bold mb-4'}>Welcome to the App!</h1>
            <p className={'text-lg text-gray-600'}>
                This is an application for
                <Link to={'/ad-management'} className={'flex items-center justify-center underline'}>
                    Property Management
                </Link>
            </p>
        
        </div>
    )
}