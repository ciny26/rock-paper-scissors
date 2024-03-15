import React, { useState, useEffect } from 'react';
import ScoreBar from "../components/ScoreBar";
import PlayingBtnContainer from "../components/PlayingBtnContainer";
import Button from "../components/subComponents/Button.styled";
import { useSelector , useDispatch } from "react-redux";
import { setSelectedOption } from '../Store/Actions';
import "../css_modules/Home.modules.css";

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
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(() => {
        const storedScore = localStorage.getItem('score');
        return storedScore ? parseInt(storedScore) : 0;
    });
    const [reseted, setReseted] = useState(false);

    const selectedOption = useSelector(status => status.Poption);
    const dispatch = useDispatch();

    const compareResults = () => {
        const computerOption = play();
        setReseted(false)
        setComOption(computerOption);
        const resultValue = result(selectedOption, computerOption);
        setResultG(resultValue);
        if (resultValue === "Player wins") {
            setScore(prevScore => prevScore + 1);
            localStorage.setItem('score', score + 1);
        } else if (resultValue === "Computer wins") {
            setScore(prevScore => prevScore - 1);
            localStorage.setItem('score', score - 1);
        }
        //show the Result
        setShowResult(true);
        // Hide the result after 2 seconds
        setTimeout(() => {
            setShowResult(false);
        }, 3000);
    };

    const resetGame = () => {
        setScore(0)
        setComOption("")
        setShowResult(false);
        setReseted(true)
        dispatch(setSelectedOption("Player 1" , ""));
        localStorage.setItem('score', 0);
    }

    useEffect(()=>{
        dispatch(setSelectedOption("Player 1" , ""))
        setReseted(false)
    }, [reseted]);

    return (
        <>
            <ScoreBar scoreValue={score} />
            <div className="playing-field">
                <PlayingBtnContainer player="Player 1" className="playing-container" reseted={reseted} />
                <div className="play-button-holder">
                    {selectedOption ? (
                        <>
                            <Button onClick={compareResults}>Play</Button>
                            <Button onClick={resetGame}>Reset</Button>
                        </>
                    ) : ""}
                </div>
                <PlayingBtnContainer player="Computer" className="playing-container" comOption={comOption} />
            </div>
            {showResult && <div className='result'>{resultG}</div>}
        </>
    );
}

export default HomeView;
