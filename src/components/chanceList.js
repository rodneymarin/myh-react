import { useState } from "react";
import Chance from "./chance";


let initialChances = [
    {id:1, isGameOver:false}
];

const ChanceList = () => {
    const [chances, setChances] = useState(initialChances);
    const [numberToGuess, setNumberToGuess] = useState("");

    const handleNewChance = () =>{
        var currentId = chances[chances.length-1].id;
        const newChances = [...chances,{id:(currentId+1), isGameOver:false}];
        setChances(newChances);
    }

    const handleNewGame = () =>{
        setChances(initialChances);
    }

    const handleGameOver = () =>{
        chances[chances.length-1].isGameOver = true;
    }

    return (chances.map((chance) => (
            <div className="row row-container">
                <Chance
                    chanceCount={chance.id}
                    numberToGuess={numberToGuess}
                    setNumberToGuess={setNumberToGuess}
                    handleNewChance={handleNewChance}
                    handleGameOver={handleGameOver}
                />
            </div>
        ))
    );
};
 
export default ChanceList;