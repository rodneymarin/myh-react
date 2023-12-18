import { useState, useRef } from "react";
import Score from "./score";
import { newNumberToGuess, calcMuertos, calcHeridos, hasRepDigits } from "../utils/logic";

const Chance = ({chanceCount, numberToGuess, setNumberToGuess, handleNewChance, handleGameOver}) => {
    //const [inputGuess, setInputGuess] = useState("");
    const inputRef = useRef(null);
    const [muertos, setMuertos] = useState(0);
    const [heridos, setHeridos] = useState(0);
    const [hasPlayed, setHasPlayed] = useState(false);
    const [hasValidationError, setHasValidationError] = useState({status:false, message: ""});

    const handleButtonClick = () => {
        
        var numToGuess = numberToGuess;
        var inputGuess = inputRef.current.value;

        if(inputGuess.length != 3){
            setHasValidationError({status:true, message:"debes escribir una cifra de 3 dígitos"});
            return;
        }
        if(hasRepDigits(inputGuess)){
            setHasValidationError({status:true, message:"la cifra no debe tener números repetidos"});
            return;
        }

        setHasPlayed(true);
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

    const handleKeyDown = (e) => {
        setHasValidationError(false);
        switch (e.key){
            case "Enter":
                handleButtonClick();
        }
    }

    return (
        <>
        <div key={chanceCount.toString()} className="chance-container">
            <span>Turno {chanceCount}</span>
            <input
                type="number" autoFocus className="input-box"
                ref={inputRef}
                onKeyDown={(e) =>handleKeyDown(e)}
                disabled={hasPlayed}/>
            <div className="play-score-container">
                <button className={`button-play ${hasPlayed ? "non-visible" : ""}`} onClick={()=>{handleButtonClick()}}>Jugar</button>
                <Score muertos={muertos} heridos={heridos} isVisible={hasPlayed}/>
            </div>
        </div>
        <div className={`validation-container ${hasValidationError.status ? "" : "non-visible"}`}>{hasValidationError.message}</div>
        </>
    );
}
 
export default Chance;