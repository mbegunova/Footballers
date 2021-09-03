import {Person} from "../person/person";
import Controls from "../controls/controls";
import Counter from "../counter/counter";
import {resultObject} from "../../constants/constants";
import {useState} from "react";
import {persons} from "../../constants/footballers";
import {shuffle} from "../../utils/helper";

export function Game({footballersArray}) {
    const [gameData, setGameData] = useState(resultObject)
    const [index, setIndex] = useState(0);
    const [reaction, setReaction] = useState("none");
    const [isPriceHidden, setPriceHidden] = useState(true);
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
            alert("Игра окончена");
            return;
        }
        setPriceHidden(false);
        setReaction(isTrue ? "green" : "red");
        setTimeout(() => {
            setReaction("none");
            setGameData(newData)
            setPriceHidden(true);
            if (persons.length - 1 === index + 1) setIndex(0)
            else setIndex(index => index + 1);
        }, 1000)
    }

    return (
        <div className={"wrapper-sports"}>
            <Counter className={"wrapper-sports__counter"} resultObj={gameData}/>
            <div className={"game"}>
                <Person className={"game__person game__person_left"} personData={footballersArray[index]}/>
                <Person
                    className={`game__person game__person_right game__person_${reaction}`}
                    isPriceHidden={isPriceHidden}
                    personData={footballersArray[index + 1]}/>
                <Controls className={"game"} onClickObject={onClickObject}/>
            </div>
        </div>
    )

}


function handlerChoose(difference, player1, player2, gameData) {
    const sum = player2.price.number - player1.price.number;
    let isTrueAnswer = false;
    debugger
    if ((difference === 1 & sum > 0) || (difference === -1 & sum < 0) || (difference === 0 & sum === 0)) {
        gameData.count += 1;
        isTrueAnswer = true;
    } else gameData.tries -= 1;
    console.log(difference, "-btn", sum);
    const isEnd = gameData.tries < 0;
    return [isEnd, gameData, isTrueAnswer];
}