import {createContext} from "react";

const Context = createContext(null);
const ContextProvider = ({children}) => {
    return (
        <Context.Provider value={'hahaha'}>
            {children}
        </Context.Provider>
    );
};

export {
    ContextProvider,
    Context
};