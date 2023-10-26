import {useEffect, useState} from "react";

import {commentService} from "../../services/commentService";
import {Comment} from "./Comment";

const Comments = () => {
    const [comments, setComments] = useState([]);


    useEffect(() => {
        commentService.getAll().then(({data}) => setComments(data))
    }, [])

    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};