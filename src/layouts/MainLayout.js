import {Outlet} from "react-router-dom";

import {Header} from "../components/Header/Header";

const MainLayout = () => {
    return (
        <div style={{backgroundColor: 'red'}}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};