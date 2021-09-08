import {buttons} from "../../constants/constants";

export default function Controls({className, onClickObject}) {

    return (
        <div className={`${className ? `${className}__controls` : ""} controls `}>
            <div className={`controls__${Object.keys(buttons)[0]}`}>{buttons.title}</div>
            {buttonsList(onClickObject)}
        </div>
    )

}

function buttonsList(onClickObject) {
    return buttons.buttons.map(({icons, text, modifier}, index) => {
        return <button key={index} onClick={onClickObject[modifier]}
                       className={`controls__button ${modifier ? `button_${modifier}` : ""}`}>{text}</button>;
    })
}