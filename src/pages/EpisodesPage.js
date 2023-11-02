import {Episodes} from "../components";
import {useChapter} from "../hooks/useChapter";
import {useEffect} from "react";

const EpisodesPage = () => {
    const {setChapter} = useChapter();

    useEffect(() => {
        setChapter(null)
    }, [setChapter])

    return (
        <div>
            <Episodes/>
        </div>
    );
};

export {EpisodesPage};