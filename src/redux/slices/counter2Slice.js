import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    count2: 0,
};
const counter2Slice = createSlice({
    name: 'counter2Slice',
    initialState,
    reducers: {
        inc: state => {
            state.count2 += 1
        },
        dec: state => {
            state.count2 -= 1
        },
        reset: (state, action) => {
            state.count2 = action.payload
        },
        run:(state, action)=>{
            action.payload()
        }
    }
});

const {reducer: counter2Reducer, actions} = counter2Slice;

const counter2Actions = {
   ...actions
}

export {
    counter2Actions,
    counter2Reducer
}
