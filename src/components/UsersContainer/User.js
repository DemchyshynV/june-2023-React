import {useNavigate} from "react-router-dom";

const User = ({user}) => {
    const {id, name, username, email} = user;
    const navigate = useNavigate();

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <button onClick={()=>navigate(`${id}`)}>Get Posts</button>
        </div>
    );
};

export {User};