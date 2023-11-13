import {configureStore} from "@reduxjs/toolkit";
import {counter1Reducer} from "./slices/counterSlice";
import {counter2Reducer} from "./slices/counter2Slice";

const store = configureStore({
    reducer: {
        counter1: counter1Reducer,
        counter2: counter2Reducer
    }
});

export {
    store
}