import {useDispatch} from "react-redux";
import {counter1Actions} from "../redux/slices/counterSlice";

const ComponentOne = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={()=>dispatch(counter1Actions.inc())}>incCount1</button>
            <button onClick={()=>dispatch(counter1Actions.dec())}>decCount1</button>
            <button onClick={()=>dispatch(counter1Actions.reset())}>resetCount1</button>
        </div>
    );
};

export {ComponentOne};