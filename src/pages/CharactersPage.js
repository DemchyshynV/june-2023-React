import {Characters} from "../components/Characters";
import {CharacterPagination} from "../components/CharacterPagination";

const CharactersPage = () => {
    return (
        <div>
            <Characters/>
            <CharacterPagination/>
        </div>
    );
};

export {CharactersPage};