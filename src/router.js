import {createBrowserRouter} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {HelloPage} from "./pages/HelloPage";

const router = createBrowserRouter([
    {
        path: '', element: <HomePage/>
    },
    {
        path: 'hello', element: <HelloPage/>
    }
]);


export {
    router
}