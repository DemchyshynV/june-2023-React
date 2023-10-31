import {useNavigate} from "react-router-dom";

const UserDetails = ({user}) => {
    const {id, name, username, email, address: {street}} = user;

    const navigate = useNavigate();

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>street: {street}</div>
            <button onClick={() => navigate('posts')}>Get Posts</button>
        </div>
    );
};

export {UserDetails};