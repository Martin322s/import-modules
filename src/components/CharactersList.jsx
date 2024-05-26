import { useEffect } from "react";
import { useState } from "react";
import { useTransition } from "react";
import * as charactersService from '../services/loadCharacters';

function CharactersList() {
    const [state, setState] = useState([]);
    const [isPending, startTransition] = useTransition();

    const clickHandler = () => {
        startTransition(async () => {
            let charactersData = await charactersService.loadCharacters();
            setTimeout(() => {
                setState(charactersData.results);
            }, 4000);
        });
    };

    return (
        <>
            <ul>
                {
                    state.map(x => <li key={x.name}>{x.name}</li>)
                }
            </ul>
            <button onClick={clickHandler}>{isPending ? 'Loading...' : 'Load Characters'}</button>
        </>
    );
}

export default CharactersList;