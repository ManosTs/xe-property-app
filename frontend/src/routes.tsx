import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import NotFound from "./NotFound.tsx";
import AdManagement from "./pages/AdManagement";
import AdManagementProperties from "./pages/Properties/AdManagementProperties.tsx";


export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path={"/ad-management"} element={<AdManagement/>}>
                <Route path=":id" />
            </Route>
            <Route path="/my-properties" element={<AdManagementProperties/>}/>
            {/*<Route path="/dashboard" element={<Dashboard />}>*/}
            {/*    <Route path="stats" element={<Stats />} />*/}
            {/*    <Route path="settings" element={<Settings />} />*/}
            {/*</Route>*/}
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}