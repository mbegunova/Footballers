import React, {useState} from "react";
import {Game} from "../components/game/game";
import {shuffle} from "../utils/helper";
import {persons} from "../constants/footballers";
import {Rules} from "../components/rules/rules";
import {resultObject} from "../constants/constants";


export default function Home() {
    const footballersArray = shuffle(persons)
    const [state, setState] = useState("rules")
    const [points, setPoints] = useState(0);


    switch (state) {
        case "rules":
            return <Rules isStartPage={true} onClick={() => setState("game")}/>;
        case "game" :
            return (<Game resultObject={resultObject} footballersArray={footballersArray} theEndOfGame={(val) => {
                debugger
                setPoints(val);
                setState("result");
                localStorage.setItem('record', val);
            }}/>);
        case "result":
            return <Rules isStartPage={false} value={points} onClick={() => {
                setState("game");
            }
            }/>;
    }
}



