import {counterObject, resultObject} from "../constants/constants";


export function toResultObject(textObj, valueObj) {
    textObj = counterObject;
    valueObj = resultObject;

    Object.entries(textObj).forEach(([key,]) => {
        if (key !== "record") {
            textObj[key].value = valueObj[key];
        }
    })
    return textObj;
}



export function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


export function redoToCamelCase(str){
    return str.replace(/[A-Z&]/g, m => m === "&" ? "-and-" : m.toLowerCase());
}