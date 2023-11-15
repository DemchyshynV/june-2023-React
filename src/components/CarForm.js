import {useEffect} from "react";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {carActions} from "../redux";

const CarForm = () => {
    const {reset, register, handleSubmit, setValue} = useForm();
    const dispatch = useDispatch();
    const {carForUpdate, isLoading} = useSelector(state => state.cars);

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate, setValue]);

    const update = async (car) => {
        await dispatch(carActions.updateById({id: carForUpdate.id, car: car}))
        reset()
    }
    const save = async (car) => {
        await dispatch(carActions.create({car}))
        reset()
    }
    return (
        <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button disabled={isLoading}>{carForUpdate ? 'update' : 'save'}</button>
        </form>
    );
};

export {CarForm};