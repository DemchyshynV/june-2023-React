import {Link, NavLink, useNavigate} from "react-router-dom";

import css from './Header.module.css';

const Header = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className={css.Header}>
                <NavLink to={"/users"}>users</NavLink>
                <NavLink to={"/comments"}>comments</NavLink>
            </div>
            <button onClick={() => navigate(-1)}>prevPage</button>
            <button onClick={() => navigate(1)}>nextPage</button>
        </div>
    );
};

export {Header};