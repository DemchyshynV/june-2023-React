import {CommentForm} from "./CommentForm";
import {Comments} from "./Comments";
import {useEffect, useState} from "react";
import {commentService} from "../../services/commentService";

const CommentsContainer = () => {
    const [comments, setComments] = useState([]);


    useEffect(() => {
        commentService.getAll().then(({data})=>setComments(data))
    }, [])

    return (
        <div>
            <CommentForm setComments={setComments}/>
            <hr/>
            <Comments comments={comments}/>
        </div>
    );
};

export {CommentsContainer};