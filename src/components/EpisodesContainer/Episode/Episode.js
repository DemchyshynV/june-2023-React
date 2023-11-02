import css from './Episode.module.css';
import {useNavigate} from "react-router-dom";
import {useChapter} from "../../../hooks/useChapter";

const Episode = ({episode}) => {
    const {id, name, episode: chapter, characters} = episode;

    const navigate = useNavigate();
    const {setChapter} = useChapter();
    const toCharacters = () => {
        const ids = characters.map(character => character.split('/').slice(-1)[0]).join(',');
        setChapter(chapter)
        navigate(`/characters/${ids}`)
    };

    return (
        <div className={css.Episode} onClick={toCharacters}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>chapter: {chapter}</div>
        </div>
    );
}

export {Episode};