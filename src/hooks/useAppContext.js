import {useContext} from "react";
import {Context} from "../hoc/ContextProvider";

const useAppContext = () => useContext(Context)

export {
    useAppContext
}