const Post = ({post}) => {
    const {id, title, body} = post;
    return (
        <div>
            <hr/>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
            <hr/>
        </div>
    );
};

export {Post};