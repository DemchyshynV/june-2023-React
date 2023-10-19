const PostSetails = ({postDetails}) => {
    const {id, title, body, userId} = postDetails;

    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
            <div>userId: {userId}</div>
        </div>
    );
};

export {PostSetails};