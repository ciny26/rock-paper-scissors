import React, { useState, useEffect } from 'react';
import ScoreBar from "../components/ScoreBar";
import PlayingBtnContainer from "../components/PlayingBtnContainer";
import Button from "../components/subComponents/Button.styled";
import { useSelector } from "react-redux";
import "../css_modules/Home.modules.css"

const result = (playerChoice, computerChoice) => {
    if (playerChoice && computerChoice) {
        const choices = ["Rock", "Paper", "Scissors"];
        const playerIndex = choices.indexOf(playerChoice);
        const computerIndex = choices.indexOf(computerChoice);
        const outcomes = ["Draw", "Player wins", "Computer wins"];
        const outcomeIndex = (playerIndex - computerIndex + 3) % 3;
        return outcomes[outcomeIndex];
    }
    return "";
}

const play = () => {
    const Possibilities = ["Rock", "Paper", "Scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return Possibilities[randomNumber];
}

const HomeView = () => {
    const [resultG, setResultG] = useState("");
    const [comOption, setComOption] = useState("");
    const [score , setScore] = useState(0)
    const selectedOption = useSelector(status => status.Poption);

    const compareResults = () => {
        const computerOption = play();
        setComOption(computerOption);
        const resultValue = result(selectedOption, computerOption);
        setResultG(resultValue);
        if (resultValue === "Player wins") {
            setScore(prevScore => prevScore + 1);
        } else if (resultValue === "Computer wins") {
            setScore(prevScore => prevScore - 1);
        }
    }


    return (
        <>
            Home
            <ScoreBar scoreValue = {score} />
            <div className="playing-field">
                <PlayingBtnContainer player="Player 1" className="playing-container" />
                <div className="play-button-holder">
                    {selectedOption ? (
                        <>
                            <Button onClick={compareResults}>Play</Button>
                            <Button>Reset</Button>
                        </>
                    ) : ""}
                </div>
                <PlayingBtnContainer player="Computer" className="playing-container" comOption={comOption} />
            </div>
            <div>{resultG}</div>
        </>
    );
}

export default HomeView;
