import {useContext} from "react";

import {Context} from "../hoc";

const useChapter = () => {
    const [chapter, setChapter] = useContext(Context)

    return {
        chapter,
        setChapter
    }
}

export {
    useChapter
}