import {useAuthContext} from "../../auth/index.jsx";
import {Outlet, Navigate} from 'react-router-dom'

const GuestGuard = ({ navigateToFail = '/' }) => {
    const { user } = useAuthContext()
    if(!user) return <Outlet/>
    return <Navigate to={navigateToFail} />
}

export { GuestGuard }
