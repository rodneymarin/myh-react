import { useState, useRef } from "react";
import Score from "./score";
import { newNumberToGuess, calcMuertos, calcHeridos, hasRepDigits } from "../utils/logic";

const Chance = ({ chanceItem, numberToGuess, setNumberToGuess, handleNewChance, handleGameOver, handleNewGame }) => {
    //const [inputGuess, setInputGuess] = useState("");
    const inputRef = useRef(null);
    const [muertos, setMuertos] = useState(0);
    const [heridos, setHeridos] = useState(0);
    const [hasPlayed, setHasPlayed] = useState(false);
    const [hasValidationError, setHasValidationError] = useState({
        status: false,
        message: "",
    });

    const handlePlayButtonClick = () => {
        var numToGuess = numberToGuess;
        var inputGuess = inputRef.current.value;

        if (inputGuess.length !== 3) {
            setHasValidationError({
                status: true,
                message: "debes escribir una cifra de 3 dígitos",
            });
            return;
        }
        if (hasRepDigits(inputGuess)) {
            setHasValidationError({
                status: true,
                message: "la cifra no debe tener números repetidos",
            });
            return;
        }

        setHasPlayed(true);
        if (chanceItem.id === 1) {
            numToGuess = newNumberToGuess(inputGuess);
            console.log(numToGuess);
            setNumberToGuess(numToGuess);
        }
        const calcMu = calcMuertos(inputGuess, numToGuess);
        const calcHe = calcHeridos(inputGuess, numToGuess, calcMu);
        setMuertos(calcMu);
        setHeridos(calcHe);
        if (calcMu === 3) {
            handleGameOver();
        }
        if (calcMu < 3) {
            handleNewChance();
        }
    };

    const handleKeyDown = (e) => {
        setHasValidationError(false);
        switch (e.key) {
            case "Enter":
                handlePlayButtonClick();
        }
    };

    const handleNewGameButtonClick = () => {
        setHasPlayed(false);
        handleNewGame();
    };

    return (
        <>
            <div className="row row-container">
                <div className="chance-container">
                    <span>Turno {chanceItem.id}</span>
                    <input type="number" autoFocus className="input-box" ref={inputRef} onKeyDown={(e) => handleKeyDown(e)} disabled={hasPlayed} />
                    <div className="play-score-container">
                        <button
                            className={`button-play ${hasPlayed ? "non-visible" : ""}`}
                            onClick={() => {
                                handlePlayButtonClick();
                            }}
                        >
                            Jugar
                        </button>
                        <Score muertos={muertos} heridos={heridos} isVisible={hasPlayed} />
                    </div>
                </div>
                <div className={`validation-container ${hasValidationError.status ? "" : "non-visible"}`}>{hasValidationError.message}</div>
            </div>
            {chanceItem.isGameOver ? (
                <div className={`row chance-container gameover-container`}>
                    ¡Lo adivinaste!
                    <button onClick={() => handleNewGameButtonClick()}>Jugar de nuevo</button>
                </div>
            ) : (
                ""
            )}
        </>
    );
};

export default Chance;
