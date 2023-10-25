import {useLocation} from "react-router-dom";

import {Posts} from "../components/PostsContainer/Posts";

const PostsPage = () => {
    const {state: userId} = useLocation();

    return (
        <div>
            <Posts userId={userId}/>
        </div>
    );
};

export {PostsPage};