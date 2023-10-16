import {useEffect, useState} from "react";

import {User} from "./User";

const Users = () => {
    const [users, setUsers] = useState([]);
    // const users = state[0];
    // const setUsers = state[1];
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json()).then(items => setUsers(items))

    }, []);

    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};