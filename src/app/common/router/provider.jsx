import {BrowserRouter} from "react-router-dom";

const RouterProvider = ({ Routes }) => {
    return (
        <BrowserRouter>
            { Routes }
        </BrowserRouter>
    )
}

export { RouterProvider }
