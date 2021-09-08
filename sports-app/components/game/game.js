import {Person} from "../person/person";
import Controls from "../controls/controls";
import Counter from "../counter/counter";
import React, {useState} from "react";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {useGameData} from "../../hooks/gameData";


export function Game({footballersArray, theEndOfGame}) {
    const [footballers, setFootballers] = useState([footballersArray[0], footballersArray[1]]);
    const [gameData, setGameData] = useGameData();
    const [index, setIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(1);
    const [reaction, setReaction] = useState("none");
    const [isPriceHidden, setPriceHidden] = useState(true);
    const TIMEOUT = 500;
    const onClickObject = {
        up() {
            handlerClick(1);
        },
        down() {
            handlerClick(-1);
        },
        equal() {
            handlerClick(0);
        },
    }



    function handlerClick(difference) {
        const [isEnd, newData, isTrue] = handlerChoose(difference, footballers[0], footballers[1], gameData)

        if (isEnd) {
            theEndOfGame(gameData.count);
            setGameData.resetData();
            setGameData.setRecord(newData.count);
            return;
        } else {
            setGameData.setCount(newData.count);
            setGameData.setTries(newData.tries);
        }

        setPriceHidden(false);
        setReaction(isTrue ? "green" : "red");

        setTimeout(() => {
            let id = index + 1, nextId = nextIndex + 1;
            if (id === footballersArray.length - 1)
                nextId = 0;
            if (id === footballersArray.length)
                id = 0;
            setReaction("none");
            setPriceHidden(true);
            setFootballers([footballersArray[id], footballersArray[nextId]]);
            setNextIndex(nextId);
            setIndex(id);
        }, TIMEOUT)
    }

    return (
        <div className={"wrapper-sports"}>
            <Counter className={"wrapper-sports__counter"} resultObj={gameData}/>
            <div className={`game`}>
                <TransitionGroup className="persons">
                    {
                        footballers.map((element, id) => (
                            <CSSTransition key={element.index} timeout={TIMEOUT}
                                           classNames="item">
                                {
                                    GetPerson(id, element.index, element, isPriceHidden, reaction)

                                }
                            </CSSTransition>
                        ))
                    }
                </TransitionGroup>
                <Controls className={"game"} onClickObject={onClickObject}/>
            </div>
        </div>
    )
}

function GetPerson(id, key, personData, isPriceHidden, reaction) {
    const isLeft = id === 0;
    return <Person
        className={id === 0 ? "game__person game__person_left" : `game__person game__person_right game__person_${reaction}`}
        key={`person_${key}`} personData={personData}
        isPriceHidden={!isLeft && isPriceHidden}
    />
}

function handlerChoose(difference, player1, player2, gameData) {
    const sum = player2.price.number - player1.price.number;
    let isTrueAnswer = false;
    if ((difference === 1 & sum > 0) || (difference === -1 & sum < 0) || (difference === 0 & sum === 0)) {
        gameData.count += 1;
        isTrueAnswer = true;
    } else gameData.tries -= 1;
    const isEnd = gameData.tries < 0;
    return [isEnd, gameData, isTrueAnswer];
}