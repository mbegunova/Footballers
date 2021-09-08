import React, {useState} from "react";
import {Game} from "../components/game/game";
import {shuffle} from "../utils/helper";
import {persons} from "../constants/footballers";
import {Rules} from "../components/rules/rules";
import {CSSTransition, TransitionGroup} from "react-transition-group";


export default function Home() {
    const [footballersArray, setArray] = useState(persons);
    const [state, setState] = useState("rules")
    const [points, setPoints] = useState(0);

    return (
        GetCurrentComponent(footballersArray, setArray, state, setState, points, setPoints)
    )
}

function GetCurrentComponent(footballersArray, setArray, state, setState, points, setPoints) {
    let element;
    switch (state) {
        case "rules":
            element = <Rules isStartPage={true} isSwiping={false} onClick={() => {
                setState("game");
            }}/>;
            break;
        case "game" :
            element = <Game footballersArray={footballersArray} theEndOfGame={(val) => {
                setPoints(val);
                setState("result");
                if ((localStorage.getItem('record') || 0) < val)
                    localStorage.setItem('record', val);
            }}/>;
            break;
        case "result":
            element = <Rules isStartPage={false} isSwiping={true} value={points} onClick={() => {
                const arr = shuffle(persons);
                setArray(arr);
                debugger
                setState("game");
            }
            }/>;
            break;
    }
    return element;
}

