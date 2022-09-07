import {useAuthContext} from "../../auth/index.jsx";
import {Outlet, Navigate} from 'react-router-dom'

const AuthGuard = ({ navigateToFail = '/' }) => {
    const { user } = useAuthContext()
    if(user) return <Outlet/>
    return <Navigate to={navigateToFail} />
}

export { AuthGuard }
