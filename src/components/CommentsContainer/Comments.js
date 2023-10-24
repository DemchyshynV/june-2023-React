import {Comment} from "./Comment";

const Comments = ({comments}) => {
    return (
        <div>
            {comments.map(comment=><Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};