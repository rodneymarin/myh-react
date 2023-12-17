import { useState } from "react";
import Score from "./score";

const Chance = ({chanceItem,handlePlayed}) => {
    const [inputGuess, setInputGuess] = useState("");

    const handleButtonClick = () => {
        handlePlayed(inputGuess);
    }

    const handleInputChange = (e) => {
        var pattern = /^[0-9]+$/;
        var value = e.target.value;
        if(value.match(pattern)){
            setInputGuess(e.target.value);
        }
    }



    return (
        <div className="chance-container">
            <span>Turno {chanceItem.id}</span>
            <input
                type="text" autoFocus className="input-box"
                onChange={(e) => {handleInputChange(e)}}
                onKeyDown={(e) => {
                    if (e.key === "Enter")
                        handleButtonClick();
                    }}
                value={inputGuess} disabled={chanceItem.hasPlayed}/>
            <div className="play-score-container">
                <button className={`button-play ${chanceItem.hasPlayed ? "non-visible" : ""}`} onClick={()=>{handleButtonClick()}}>Jugar</button>
                <Score muertos={chanceItem.muertos} heridos={chanceItem.heridos} hasPlayed={chanceItem.hasPlayed}/>
            </div>
        </div>
    );
}
 
export default Chance;