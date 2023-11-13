import {counter1Actions} from "../redux/slices/counterSlice";
import {useDispatch} from "react-redux";
import {counter2Actions} from "../redux/slices/counter2Slice";

const ConponentTwo = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={()=>dispatch(counter2Actions.inc())}>incCount1</button>
            <button onClick={()=>dispatch(counter2Actions.dec())}>decCount1</button>
            <button onClick={()=>dispatch(counter2Actions.reset(555))}>resetCount1</button>
            <button onClick={()=>dispatch(counter2Actions.run(()=>console.log('Hello')))}>resetCount1</button>
        </div>
    );
};

export {ConponentTwo};