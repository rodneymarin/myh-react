import { useState, useRef } from "react";
import Score from "./score";
import { newNumberToGuess, calcMuertos, calcHeridos } from "../utils/logic";

const Chance = ({chanceCount, numberToGuess, setNumberToGuess, handleNewChance, handleGameOver}) => {
    //const [inputGuess, setInputGuess] = useState("");
    const inputRef = useRef(null);
    const [muertos, setMuertos] = useState(0);
    const [heridos, setHeridos] = useState(0);
    const [hasPlayed, setHasPlayed] = useState(false);

    const handleButtonClick = () => {
        setHasPlayed(true);
        var numToGuess = numberToGuess;
        var inputGuess = inputRef.current.value;
        if(chanceCount == 1){
            numToGuess = newNumberToGuess(inputGuess);
            setNumberToGuess(numToGuess);
        }
        const calcMu = calcMuertos(inputGuess, numToGuess);
        const calcHe =  calcHeridos(inputGuess, numToGuess, calcMu);
        setMuertos(calcMu);
        setHeridos(calcHe);
        if(calcMu < 3){
            handleNewChance();
        }else{
            handleGameOver();
        }
    }

    return (
        <div key={chanceCount.toString()} className="chance-container">
            <span>Turno {chanceCount}</span>
            <input
                type="text" autoFocus className="input-box"
                ref={inputRef}
                onKeyDown={(e) => {
                    if (e.key === "Enter")
                        handleButtonClick();
                    }}
                disabled={hasPlayed}/>
            <div className="play-score-container">
                <button className={`button-play ${hasPlayed ? "non-visible" : ""}`} onClick={()=>{handleButtonClick()}}>Jugar</button>
                <Score muertos={muertos} heridos={heridos} isVisible={hasPlayed}/>
            </div>
        </div>
    );
}
 
export default Chance;