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
        var newChances = [...chances];
        newChances[newChances.length-1].isGameOver = true;
        setChances(newChances);
    }

    return (chances.map((chance) => (
        <>
        <div className="row row-container">
            <Chance
                chanceCount={chance.id}
                numberToGuess={numberToGuess}
                setNumberToGuess={setNumberToGuess}
                handleNewChance={handleNewChance}
                handleGameOver={handleGameOver}
            />
        </div>
        <div className={`row gameover-container ${chance.isGameOver?"":"non-visible"}`}>
            ¡Lo adivinaste!
            <button>Jugar de nuevo</button>
        </div>
        </>
    )));
};
 
export default ChanceList;