import {useNavigate} from "react-router-dom";

const Comment = ({comment}) => {
    const {id, postId, name, email, body} = comment;

    const navigate = useNavigate();

    return (
        <div>
            <div>id: {id}</div>
            <div>postId: {postId}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
            <button onClick={() => navigate('post', {state: {postId}})}>getPost</button>
        </div>
    );
};

export {Comment};