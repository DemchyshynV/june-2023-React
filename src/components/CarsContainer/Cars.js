import {Car} from "./Car";

const Cars = ({cars, setCarForUpdate, trigger}) => {
    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate} trigger={trigger}/>)}
        </div>
    );
};

export {Cars};