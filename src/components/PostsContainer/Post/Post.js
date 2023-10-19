const Post = ({post, getPostId}) => {
    const {id, title} = post;

    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <button onClick={() => getPostId(id)}>Details</button>
        </div>
    );
};

export {Post};