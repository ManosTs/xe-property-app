import Routes from "./routes.tsx";
import {ToastContainer} from "react-toastify";
import Layout from "./components/layout.tsx";

function App() {
    
    return (
        <Layout>
            <div className={'w-full'}>
                <Routes/>
                <ToastContainer position={'top-right'} closeOnClick pauseOnHover/>
            </div>
        </Layout>
    
    )
}

export default App
