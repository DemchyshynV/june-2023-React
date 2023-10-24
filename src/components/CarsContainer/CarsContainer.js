import {useEffect, useState} from "react";

import {carService} from "../../services/carService";
import {CarForm} from "./CarForm";
import {Cars} from "./Cars";

const CarsContainer = () => {
    const [cars, setCars] = useState([]);
    const [flag, setFlag] = useState(null)
    const [carForUpdate, setCarForUpdate] = useState(null)

    const trigger = () => {
        setFlag(prev => !prev)
    }

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [flag])

    return (
        <div>
            <CarForm trigger={trigger} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            <Cars cars={cars} setCarForUpdate={setCarForUpdate} trigger={trigger}/>
        </div>
    );
};

export {CarsContainer};