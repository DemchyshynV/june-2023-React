import {Users} from "../components/UsersContainer/Users";
import {Outlet} from "react-router-dom";

const UsersPage = () => {
    return (
        <div>
            <Users/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export {UsersPage};