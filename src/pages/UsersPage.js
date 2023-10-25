import {Outlet} from "react-router-dom";

import {Users} from "../components/UsersContainer/Users";

const UsersPage = () => {
    return (
        <div>
            <Users/>
            <Outlet/>
        </div>
    );
};

export {UsersPage};