import { useState } from "react";
import Chance from "./chance";
import { v4 as uuidv4 } from 'uuid';

const ChanceList = () => {
    const [chances, setChances] = useState([{id:1, key:uuidv4(), isGameOver:false}]);
    const [numberToGuess, setNumberToGuess] = useState("");

    const handleNewChance = () =>{
        var currentId = chances[chances.length-1].id;
        const newChances = [...chances,{id:(currentId+1), isGameOver:false}];
        setChances(newChances);
    }

    const handleNewGame = () =>{
        setChances([{id:1, key:uuidv4(), isGameOver:false}]);
    }

    const handleGameOver = () =>{
        var newChances = [...chances];
        newChances[newChances.length-1].isGameOver = true;
        setChances(newChances);
    }

    return (chances.map((chance) => (
        <>

            <Chance
                key={chance.key}
                chanceItem={chance}
                numberToGuess={numberToGuess}
                setNumberToGuess={setNumberToGuess}
                handleNewChance={handleNewChance}
                handleGameOver={handleGameOver}
                handleNewGame={handleNewGame}
            />
        
        </>
    )));
};
 
export default ChanceList;