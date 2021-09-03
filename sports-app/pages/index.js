import React from "react";
import {Game} from "../components/game/game";
import {shuffle} from "../utils/helper";
import {persons} from "../constants/footballers";


export default function Home() {
  const footballersArray = shuffle(persons)
  return (<Game footballersArray={footballersArray}/>);
}



