import {Route, Routes} from "react-router-dom";
import {lazy} from "react";

const AdManagement = lazy(() =>
    import("./pages/AdManagement"));

const AdManagementProperties = lazy(() =>
    import("./pages/Properties/AdManagementProperties.tsx"));

const NotFound = lazy(() =>
    import("./NotFound.tsx"));

const Home = lazy(() =>
    import("./pages/Home.tsx"));

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path={"/ad-management"} element={<AdManagement/>}>
                <Route path=":id" />
            </Route>
            <Route path="/my-properties" element={<AdManagementProperties/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}