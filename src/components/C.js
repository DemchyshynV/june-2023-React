import {useAppContext} from "../hooks/useAppContext";

const C = () => {
    const value = useAppContext()

    return (
        <div>
            <div>C: {value}</div>
        </div>
    );
};

export {C};