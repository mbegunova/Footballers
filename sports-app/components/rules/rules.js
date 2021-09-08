import {endObject, rulesObject} from "../../constants/constants";
import {CSSTransition} from "react-transition-group";
import {useEffect, useState} from "react";

export function Rules({isStartPage, value, onClick, isSwiping}) {
    const [state, setState] = useState(null);

    useEffect(() => {
        setState(isSwiping);
    }, [isSwiping])

    return (
        <div className={`rules ${isStartPage? "rules-start" : "rules-end"}`}>
            <CSSTransition in={state} classNames="rules-mount" timeout={800}>
                <div>
                    {GetTitle(isStartPage, value)}
                    <div className={"rules__text"}> {isStartPage ? rulesObject.rulesText : endObject.endText}</div>
                    <div className={"rules__image"}>
                        <picture>
                            <source srcSet="images/start.webp" type="image/webp"/>
                            <img alt="Игрок" src="images/start.jpg" width="637" height="645"/>
                        </picture>
                    </div>
                    <button onClick={() => {
                        onClick();
                    }} className={"rules__button"}>{isStartPage ? "Начать" : "Еще раз"}</button>
                </div>
            </CSSTransition>
        </div>
    )
}

function GetTitle(isStartPage, value) {
    if (isStartPage) return (
        <div className={"rules__title"}>
            {rulesObject.rulesTitle}
        </div>
    )
    else return (
        <div className={"rules__title"}>
            {endObject.endTitle}
            <span> - </span>
            {value}
        </div>)
}