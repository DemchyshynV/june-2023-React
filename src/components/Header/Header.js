import css from './Header.module.css';
import {NavLink, useNavigate} from "react-router-dom";
import {useAppContext} from "../../hooks/useAppContext";
import {authService} from "../../services";

const Header = () => {
    const {isAuth, me, setMe, setIsAuth} = useAppContext();
    const navigate = useNavigate();

    const logout = () => {
        authService.deleteToken()
        setMe(null)
        setIsAuth(null)
        navigate('/login')
    }
    return (
        <div className={css.Header}>
            <h2>Cars</h2>
            {
                isAuth ?
                    <div>
                        {me.username}
                        <button onClick={logout}>LogOut</button>
                    </div>
                    :
                    <div>
                        <NavLink to={'login'}>Login</NavLink>
                        <NavLink to={'register'}>Register</NavLink>
                    </div>

            }
        </div>
    );
};

export {Header};