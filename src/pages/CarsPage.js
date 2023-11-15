import {useSelector} from "react-redux";

import {CarForm, Cars} from "../components";

const CarsPage = () => {
    const {errors} = useSelector(state => state.cars);
    return (
        <div>
            {errors && <h1>{JSON.stringify(errors)}</h1>}
            <CarForm/>
            <hr/>
            <Cars/>
        </div>
    );
};

export {CarsPage};