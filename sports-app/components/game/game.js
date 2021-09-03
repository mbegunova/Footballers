import {Person} from "../person/person";
import Controls from "../controls/controls";
import Counter from "../counter/counter";

export function Game(){
return(
    <div className={"wrapper-sports"}>
    <Counter className={"wrapper-sports__game game"}/>
    <div className={"game"}>
        <Person className={"game__person game__person_left"}/>
        <Person className={"game__person game__person_right"} isPriceHidden={true}/>
        <Controls className={"game"}/>
    </div>
        </div>
)

}