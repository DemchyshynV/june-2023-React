import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    count1: 0
};
const counter1Slice = createSlice({
    name: 'counter1Slice',
    initialState,
    reducers: {
        inc: state => {
            state.count1 += 1
        },
        dec: state => {
            state.count1 -= 1
        },
        reset: state => {
            state.count1 = 0
        }
    }
});

const {reducer: counter1Reducer, actions: {inc, dec, reset}} = counter1Slice;

const counter1Actions = {
    inc, dec, reset
}
export {
    counter1Reducer,
    counter1Actions
}
