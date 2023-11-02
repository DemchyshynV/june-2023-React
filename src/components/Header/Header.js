import css from './Header.module.css';
import {useChapter} from "../../hooks/useChapter";

const Header = () => {
    const {chapter} = useChapter();
    return (
        <div className={css.Header}>
            {
                chapter ?
                    <h1>{chapter}</h1>
                    :
                    <h1>Rick & Morty</h1>
            }
        </div>
    );
};

export {Header};