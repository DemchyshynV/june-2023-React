import {Posts} from "../components/PostContainer/Posts";
import {useLoaderData} from "react-router-dom";

const PostsPage = () => {
    const {data} = useLoaderData();
    return (
        <div>
            <Posts posts={data}/>
        </div>
    );
};

export {PostsPage};