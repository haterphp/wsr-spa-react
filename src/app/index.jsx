import {AuthProvider} from "./common/auth";
import {RouterProvider} from "./common/router";
import {InnerRoutes} from "./router/index.jsx";
import './index.css'

const App = () => {
    return (
        <AuthProvider>
            <RouterProvider Routes={ <InnerRoutes/> } />
        </AuthProvider>
    )
}

export default App
