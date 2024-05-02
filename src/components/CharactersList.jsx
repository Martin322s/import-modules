import { useEffect } from "react";
import { useState } from "react";
import { useTransition } from "react";
import * as charactersService from '../services/loadCharacters';

function CharactersList() {
    const [state, setState] = useState([]);
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        startTransition(async () => {
            let charactersData = await charactersService.loadCharacters();
            setState(charactersData.results);
        });
    }, []);

    return (
        <ul>
            {
                isPending ? <h1>Loading.....</h1> : state.map(x => <li key={x.name}>{x.name}</li>)
            }
        </ul>
    );
}

export default CharactersList;