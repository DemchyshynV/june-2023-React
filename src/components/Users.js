import {Component} from "react";
import {userService} from "../services/userService";
import {User} from "./User";

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
        console.log('constructor');
    }

    componentDidMount() {
        console.log('componentDidMount');
        userService.getAll().then(({data}) => this.setState({users: data}))
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
        console.log(snapshot, '!!!!!!!!!!!!!!!!!!!!!!!!!');
    }


    getSnapshotBeforeUpdate(prevProps, prevState) {
        return 'snapshottt'
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        console.log('render');
        return (
            <div>
                {this.state.users.map(user => <User key={user.id} user={user}/>)}
            </div>
        )
    }
}

export {
    Users
}