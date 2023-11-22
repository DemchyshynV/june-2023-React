import {Users} from "./components/Users";
import {useState} from "react";
import {UserFc} from "./components/UserFC";

const App = () => {
    const [flag, setFlag] = useState(true)
    return (
        <div>
            {flag && <UserFc/>}
            <button onClick={() => setFlag(false)}>hide</button>
        </div>
    );
};

export {App};