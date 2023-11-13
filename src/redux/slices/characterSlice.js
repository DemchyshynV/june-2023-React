import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    characters: [],
    prevPage: null,
    nextPage: null
}

const characterSlice = createSlice({
    name: 'characterSlice',
    initialState,
    reducers: {
        setResponse:(state, action) => {
            const {info:{next, prev}, results} = action.payload;
            state.characters = results
            state.nextPage = next
            state.prevPage = prev
        }
    }
});

const {reducer: characterReducer, actions} = characterSlice;

const characterActions = {
    ...actions
}

export {
    characterReducer,
    characterActions
}