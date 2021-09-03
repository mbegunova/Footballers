import {counterObject} from "../../constants/constants";

export default function Counter({className}) {
    return (
        <div className={ `counter`}>
            {getCounter()}
        </div>
    )

}

function getCounter() {
    const arr = [];
    Object.entries(counterObject).forEach(([key,value])=>{
        const mass = []
            Object.entries(value).forEach(([title,text])=>{
                mass.push( <div className={`counter__${title}`}>{text}</div>);
            });
            arr.push(<div className={`counter__${key}`}>{mass}</div>)
    });
    return arr;

}