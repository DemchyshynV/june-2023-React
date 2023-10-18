import {useEffect, useState} from "react";
import axios from "axios";

import css from './Users.module.css';
import {User} from "../User/User";
import {axiosService} from "../../../services/axiosService";
import {userService} from "../../../services/userService";
import {UserDetails} from "../UserDetails/UserDetails";

const Users = () => {
    const [users, setUsers] = useState([])
    const [userDetails, setUserDetails] = useState(null)

    const click = async (userId) => {
        const {data} = await userService.getById(userId);
        setUserDetails(data)
    }


    useEffect(() => {
        // fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json()).then(value => setUsers(value))
        // axiosService.get('/users').then(({data})=>setUsers(data))
        userService.getAll().then(({data}) => setUsers(data))
    }, [])

    return (
        <div>
            <div className={css.users}>
                {users.map(user => <User key={user.id} user={user} click={click}/>)}
            </div>
            {
                userDetails && <UserDetails userDetails={userDetails}/>
            }
        </div>
    );
};

export {Users};