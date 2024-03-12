import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PlayingBtn from "./subComponents/PlayingBtn.styled";
import OptionImg from "./subComponents/optionImage.styled";
import handRock from '../assets/handRock.svg';
import handScissor from '../assets/handScissor.svg';
import handPaper from '../assets/handPaper.svg';
import { setSelectedOption } from '../Store/Actions';

const PlayingBtnContainer = ({ player , comOption }) => {
    const [clicked , setClicked] = useState("")
    const playerSelectedOption = useSelector(state => state.Poption); // Use selector to get the option from the state
    const dispatch = useDispatch();
    const handleSetOption = (e) => {
        if (player =="Player 1") {
            const value = e.currentTarget.getAttribute('value');
            setClicked(value)
            dispatch(setSelectedOption("Player 1",value));
        }
        
    };

    return (
        <div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <PlayingBtn $borderc="red" value="Rock" className={clicked == "Rock" ? "highlited" : ""} onClick={handleSetOption}>
                    <OptionImg src={handRock} alt="Rock" />
                </PlayingBtn>

                <PlayingBtn $borderc="Blue" value="Scissors" className={clicked == "Scissors" ? "highlited" : ""} onClick={handleSetOption}>
                    <OptionImg src={handScissor} alt="Scissors" />
                </PlayingBtn>

                <PlayingBtn $borderc="yellow" value="Paper" className={clicked == "Paper" ? "highlited" : ""} onClick={handleSetOption}>
                    <OptionImg src={handPaper} alt="Paper" />
                </PlayingBtn>
            </div>
            <h2 className="player" style={{ textAlign: "center" }}>{player}</h2>
            <div>{player == "Player 1" ?  "You Selected : "+ playerSelectedOption : "Computer Selected : "+comOption } </div>
        </div>
    );
}

export default PlayingBtnContainer;
