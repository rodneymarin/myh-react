import { useState } from "react";
import Chance from "./chance";
import Score from "./score";

let initialChances = [
    {id:1, guess:"", muertos:0, heridos: 0}
];

const ChanceList = () => {
    const [chances, setChances] = useState(initialChances);

    const handlePlayed = (inputGuess) => {
        console.log(inputGuess);
    }

    return (
        chances.map(chance => (
            <div className="row-container">
                <Chance chanceCount={chance.id} handlePlayed={handlePlayed}/>
                <Score muertos={chance.muertos} heridos={chance.heridos}/>
            </div>
        ))
    );
}
 
export default ChanceList;