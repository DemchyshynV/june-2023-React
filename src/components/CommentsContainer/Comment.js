const Comment = ({comment}) => {
    const {id, name, email, body} = comment;

    return (
        <div style={{width: '50%'}}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
        </div>
    );
};

export {Comment};