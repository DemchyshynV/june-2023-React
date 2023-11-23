import React, {Component} from 'react';

class Post extends Component {
    render() {
        const {id, userId, title, body} = this.props.post;

        return (
            <div>
                <div>id: {id}</div>
                <div>userId: {userId}</div>
                <div>title: {title}</div>
                <div>body: {body}</div>
            </div>
        );
    }
}

export {Post};