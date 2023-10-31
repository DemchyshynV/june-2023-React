import {useLoaderData} from "react-router-dom";

import {User} from "./User";

const Users = () => {
    const {data: users} = useLoaderData();
    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};