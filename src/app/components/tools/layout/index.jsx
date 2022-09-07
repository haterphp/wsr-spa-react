import {Link, Outlet} from "react-router-dom";
import {ROUTER_PATHS} from "../../../router/paths.js";
import classes from './index.module.css'

const Layout = () => {
    return (
        <div>
            <nav className={classes.nav}>
                <Link to={ROUTER_PATHS.INDEX}>Главная</Link>
                <Link to={ROUTER_PATHS.LOGIN}>Войти</Link>
            </nav>
            <div className={classes.container}>
                <Outlet/>
            </div>
        </div>
    )
}

export { Layout }
