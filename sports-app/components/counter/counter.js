import {toResultObject} from "../../utils/helper";

export default function Counter({className, resultObj}) {
    resultObj = toResultObject(resultObj);

    return (
        <div className={`${className ?? ""} counter`}>
            <div className={"counter__record"}> {GetCounterItem(resultObj.record, true, resultObj.count.value)}</div>
            <div className={"counter__count"}> {GetCounterItem(resultObj.count)}</div>
            <div className={"counter__tries"}> {GetCounterItem(resultObj.tries)}</div>
        </div>
    )
}

function GetCounterItem(resultObj, isRecord = false, currentScore) {
    if (isRecord) resultObj.value = localStorage.getItem('record') ?? currentScore;
    return (
        <>
            <div className={"counter__text"}>{resultObj.text}</div>
            <div className={"counter__value"}>{resultObj.value}</div>
        </>
    )
}