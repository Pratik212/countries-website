import {useRoutes} from "react-router-dom";
import {Countries} from "../pages/countries";
import {CountryPage} from "../pages/countryPage";

export const MainRoutes = () => {
    return useRoutes([
        {path:'/', element: <Countries/>},
        {path:'/country/:name', element: <CountryPage/>},
        {path:'/code/:code', element: <CountryPage/>},
    ])
}