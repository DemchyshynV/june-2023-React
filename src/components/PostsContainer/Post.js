import {useNavigate} from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post;

    const navigate = useNavigate();

    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <button onClick={() => navigate(`${id}`)}>Post Details</button>
        </div>
    );
};

export {Post};