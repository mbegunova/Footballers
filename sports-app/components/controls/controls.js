import {buttons, onClickObject} from "../../constants/constants";

export default function Controls({className, onClickObject}) {

    return (
        <div className={className}>
            {buttonsList(className, onClickObject)}
        </div>
    )

}

function buttonsList(className) {
    return buttons.map(({icons, text, modifier}, index) => {
        return <button key={index} onClick={onClickObject[modifier]}
                    className={`${className ? "__button" : ""} ${modifier ? `button_${modifier}` : ""}`}>{text}</button>;
    })
}