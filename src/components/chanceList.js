import { useState } from "react";
import Chance from "./chance";
import { newNumberToGuess, calcMuertos, calcHeridos } from "../utils/logic";


let initialChances = [
    {id:1, guess:"", muertos:0, heridos: 0, hasPlayed:false}
];

const ChanceList = () => {
    const [chances, setChances] = useState(initialChances);
    const [numberToGuess, setNumberToGuess] = useState("");

    const handlePlayed = (inputGuess) => {
        var numToGuess = numberToGuess;
        if(chances.length == 1){
            numToGuess  = newNumberToGuess(inputGuess);    
            setNumberToGuess(numToGuess);
        }
        const muertosCount = calcMuertos(inputGuess, numToGuess);
        const heridosCount = calcHeridos(inputGuess, numToGuess, muertosCount);
        chances[chances.length-1].muertos = muertosCount;
        chances[chances.length-1].heridos = heridosCount;
        
        chances[chances.length-1].hasPlayed = true;
        var updateChances = chances;
        if(muertosCount < 3){
            updateChances = [...chances, {id:(chances.length+1), guess:"", muertos: 0, heridos: 0, hasPlayed:false}];
        }
        setChances(updateChances);
    }

    return (
        chances.map(chance => (
            <div className="row-container">
                <Chance chanceItem={chance} handlePlayed={handlePlayed}/>
            </div>
        ))
    );
}
 
export default ChanceList;