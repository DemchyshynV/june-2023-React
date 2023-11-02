import {Characters} from "../components";
import {useNavigate} from "react-router-dom";

const CharactersPage = () => {
    const navigate = useNavigate();

    const back = () => {
        navigate(-1)
    }

    return (
        <div>
            <button onClick={back}>back</button>
            <Characters/>
        </div>
    );
};

export {CharactersPage};