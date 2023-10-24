import {carService} from "../../services/carService";

const Car = ({car, setCarForUpdate, trigger}) => {
    const {id, brand, price, year} = car;

    const del = async () => {
        await carService.deleteById(id)
        trigger()

    }
    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => setCarForUpdate(car)}>update</button>
            <button onClick={del}>delete</button>
        </div>
    );
};

export {Car};