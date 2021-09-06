import {Person} from "../person/person";
import Controls from "../controls/controls";
import Counter from "../counter/counter";
import {useState} from "react";
import {persons} from "../../constants/footballers";
import {CSSTransition} from "react-transition-group";
import TransitionGroup from "react-transition-group/cjs/TransitionGroup";


export function Game({footballersArray, theEndOfGame, resultObject}) {
    const [gameData, setGameData] = useState(resultObject);
    const [index, setIndex] = useState(0);
    const [reaction, setReaction] = useState("none");
    const [isPriceHidden, setPriceHidden] = useState(true);
    const [swipe, setSwipe] = useState(true);

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
        const [isEnd, newData, isTrue] = handlerChoose(difference, footballersArray[index], footballersArray[index + 1], gameData);
        if (isEnd) {
            theEndOfGame(gameData.count);
            return;
        }
        setPriceHidden(false);
        setReaction(isTrue ? "green" : "red");
        setSwipe(false);

        setTimeout(() => {
            setGameData(newData);
            setReaction("none");
            setPriceHidden(true);
            if (persons.length - 1 === index + 1) setIndex(0)
            else setIndex(index => index + 1);
            setSwipe(true);
        }, 1000)
    }

    return (

        <div className={"wrapper-sports"}>
            <Counter className={"wrapper-sports__counter"} resultObj={gameData}/>
            <TransitionGroup className={"RTG"}>
                <CSSTransition key={index} timeout={1000} classNames="swipe">
                    <div className={"game"}>
                        <Person key={index} className={"game__person game__person_left"}
                                personData={footballersArray[index]}/>
                        <Person key={index + 1}
                                className={`game__person game__person_right game__person_${reaction}`}
                                isPriceHidden={isPriceHidden}
                                personData={footballersArray[index + 1]}/>
                        <Controls className={"game"} onClickObject={onClickObject}/>
                    </div>
                </CSSTransition>
            </TransitionGroup>
        </div>
    )
}


function handlerChoose(difference, player1, player2, gameData) {
    console.log("1: ", player1.name, "2: ", player2.name);
    const sum = player2.price.number - player1.price.number;
    let isTrueAnswer = false;
    if ((difference === 1 & sum > 0) || (difference === -1 & sum < 0) || (difference === 0 & sum === 0)) {
        gameData.count += 1;
        isTrueAnswer = true;
    } else gameData.tries -= 1;
    const isEnd = gameData.tries < 1;
    return [isEnd, gameData, isTrueAnswer];
}