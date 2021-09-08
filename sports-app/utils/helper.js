import {counterObject} from "../constants/constants";

export function toResultObject(valueObj) {
    const textObj = counterObject;
    Object.entries(textObj).forEach(([key,]) => {
        textObj[key].value = valueObj[key];
    })
    return textObj;
}


export function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

export function redoToCamelCase(str) {
    return str.replace(/[A-Z&]/g, m => m === "&" ? "-and-" : m.toLowerCase());
}