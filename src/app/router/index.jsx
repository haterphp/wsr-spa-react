import { Routes, Route } from 'react-router-dom'
import {ROUTER_PATHS} from "./paths";
import IndexPage from "../pages/index";
import LoginPage from "../pages/login";
import {Layout} from "../components/tools/layout";
import {AuthGuard, GuestGuard} from "../common/router/index.js";

const InnerRoutes = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Layout/>}>
                <Route path={ROUTER_PATHS.INDEX} element={<IndexPage/> } />
                <Route path={'/'} element={<GuestGuard/>} >
                    <Route path={ROUTER_PATHS.LOGIN} element={<LoginPage/> } />
                </Route>
            </Route>
        </Routes>
    )
}

export { InnerRoutes }
