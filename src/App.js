import {UsersContainer} from "./components/UsersContainer/UsersContainer";
import {CommentsContainer} from "./components/CommentsContainer/CommentsContainer";

const App = () => {
    return (
        <div style={{display: 'flex'}}>
            <UsersContainer/>
            <CommentsContainer/>
        </div>
    );
};

export {App};