import {createContext, useState} from "react";

const Context = createContext(null);
const ContextProvider = ({children}) => {
    const state = useState(null);

    return (
        <Context.Provider value={state}>
            {children}
        </Context.Provider>
    );
};

export {
    ContextProvider,
    Context
};