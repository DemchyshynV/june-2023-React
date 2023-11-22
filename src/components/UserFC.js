import {useEffect, useState} from "react";
import {User} from "./User";
import {userService} from "../services/userService";

const UserFc = () => {
    console.log('constructor');

    const [users, setUsers] = useState([])

    useEffect(() => {
        console.log('componentDidMount');
        userService.getAll().then(({data}) => setUsers(data))
        return ()=>{
            console.log('componentWillUnmount');
        }
    }, []);

    useEffect(()=>{
        console.log('componentDidUpdate');
        return ()=>{
            console.log('componentWillUnmount2');
        }
    }, [users])

    return (
        <div>
            {console.log('render')}
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {UserFc};