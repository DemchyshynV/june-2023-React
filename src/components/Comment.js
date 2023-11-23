import React, {Component} from 'react';

class Comment extends Component {
    render() {
        const {id, name, body} = this.props.comment;
        return (
            <div>
                <div>id: {id}</div>
                <div>name: {name}</div>
                <div>body: {body}</div>

            </div>
        );
    }
}

export {Comment};