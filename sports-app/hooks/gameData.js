const gameData = {
    count: 0,
    tries: 5,
    record: 0,
}

export function useGameData() {
    const {count, tries, record} = gameData;
    return [{count, tries, record}, {setCount, setTries, resetData, setRecord}];

}

function setCount(value) {
    gameData.count = value
    setRecord(value);
}


function setTries(value) {
    gameData.tries = value
}


function resetData() {
    gameData.count = 0;
    gameData.tries = 5;
}

function setRecord(value) {
    try {
        const record = localStorage.getItem('record');
        value > record ? gameData.record = value : gameData.record = record;
    } catch {
        gameData.record = value;
    }

}