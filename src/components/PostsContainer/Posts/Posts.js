import {useEffect, useState} from "react";

import {postService} from "../../../services/postService";
import {Post} from "../Post/Post";
import {PostSetails} from "../PostSetails/PostSetails";

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [postDetails, setPostDetails] = useState(null)

    const getPostId = async (id) => {
        const {data} = await postService.getById(id);
        setPostDetails(data)
    }

    useEffect(() => {
        postService.getAll().then(({data}) => setPosts(data))
    }, [])

    return (
        <div>
            <div>
                {postDetails && <PostSetails postDetails={postDetails}/>}
            </div>
            <div>
                {posts.map(post => <Post key={post.id} post={post} getPostId={getPostId}/>)}
            </div>
        </div>
    );
};

export {Posts};