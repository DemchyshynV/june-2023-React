import {useParams} from "react-router-dom";
import {Post} from "./Post";

const Posts = ({posts}) => {
    const {userId} = useParams();


    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};