import { useState } from "react";

const Chance = ({chanceCount, handlePlayed}) => {
    const [inputGuess, setInputGuess] = useState("");

    const handleClick = () => {
        handlePlayed(inputGuess);
    }

    return (
        <div className="chance-container">
            <span>Turno {chanceCount}</span>
            <input type="text" onChange={(e) => {setInputGuess(e.target.value)}} value={inputGuess}/>
            <button onClick={()=>{handleClick()}}>Jugar</button>
        </div>
    );
}
 
export default Chance;