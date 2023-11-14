import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {CarsPage} from "./pages";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'cars'}/>},
            {path: 'cars', element: <CarsPage/>}
        ]
    }
]);

export {
    router
}