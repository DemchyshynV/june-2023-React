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
            {/*<button onClick={() => navigate('posts', {state: id, replace: true})}>getPosts</button>*/}
            <button onClick={() => navigate('posts', {state: id})}>getPosts</button>
        </div>
    );
};

export {User};