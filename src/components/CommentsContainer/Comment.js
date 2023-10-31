const Comment = ({comment}) => {
    const {id, postId, name} = comment;

    return (
        <div>
            <div>id: {id}</div>
            <div>postId: {postId}</div>
            <div>name: {name}</div>
        </div>
    );
};

export {Comment};