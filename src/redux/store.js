import {configureStore} from "@reduxjs/toolkit";

import {carReducer} from "./slices";

const store = configureStore({
    reducer: {
        cars: carReducer
    }
});

export {
    store
}