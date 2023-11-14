import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {carValidator} from "../validators";
import {carService} from "../services";
import {carActions} from "../redux";

const CarForm = () => {
    const {reset, register, handleSubmit, formState: {errors, isValid}, setValue} = useForm({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });
    const dispatch = useDispatch();
    const {carForUpdate} = useSelector(state => state.cars);

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate, setValue]);

    const update = async (car) => {
        await carService.updateById(carForUpdate.id, car)
        dispatch(carActions.trigger())
        dispatch(carActions.setCarForUpdate(null))
        reset()
    }
    const save = async (car) => {
        await carService.create(car)
        dispatch(carActions.trigger())
        reset()

    }

    return (
        <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
            <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
            <button disabled={!isValid}>{carForUpdate ? 'update' : 'save'}</button>
            {errors.brand && <div>brand: {errors.brand.message}</div>}
            {errors.price && <div>price: {errors.price.message}</div>}
            {errors.year && <div>year: {errors.year.message}</div>}
        </form>
    );
};

export {CarForm};