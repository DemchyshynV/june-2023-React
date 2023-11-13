import {configureStore} from "@reduxjs/toolkit";
import {characterReducer} from "./slices/characterSlice";

const store = configureStore({
    reducer: {
        characters: characterReducer
    }
});

export {
    store
}