export const buttons = {
    title: "Рыночная стоимость:",
    buttons: [
        {
            modifier: "up",
            icons: "",
            text: "выше"
        }
        ,
        {
            modifier: "down",
            icons: "",
            text: "ниже"
        },
        {
            modifier: "equal",
            icons: "",
            text: "равна"
        },
    ],
}

export const onClickObject = {
    up: () => {
        alert("up")
    },
    down: () => {
        alert("up")
    },
    equal: () => {
        alert("equal")
    },
}


export const counterObject = {
    record: {
        text: "Рекорд: ",
        value: "0",
    },
    count: {
        text: "Счет: ",
        value: "0",
    },
    tries: {
        text: "Попытки: ",
        value: "0",
    }
}

export const resultObject = {
    count: 0,
    tries: 5,
}