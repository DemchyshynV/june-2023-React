import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

import {postService} from "../../services/postService";
import {Post} from "./Post";

const PostContainer = () => {
    const {state: {postId}} = useLocation();
    const [post, setPost] = useState(null);


    useEffect(() => {
        postService.getById(postId).then(({data}) => setPost(data))
    }, [postId])

    return (
        <div>
            {post && <Post post={post}/>}
        </div>
    );
};

export {PostContainer};