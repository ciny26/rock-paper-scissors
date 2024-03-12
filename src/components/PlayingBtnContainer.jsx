import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PlayingBtn from "./subComponents/PlayingBtn.styled";
import OptionImg from "./subComponents/optionImage.styled";
import handRock from '../assets/handRock.svg';
import handScissor from '../assets/handScissor.svg';
import handPaper from '../assets/handPaper.svg';
import { setSelectedOption } from '../Store/Actions';
import store from '../Store/store'; // Import the store

const PlayingBtnContainer = ({ player , comOption }) => {
    const playerSelectedOption = useSelector(state => state.Poption); // Use selector to get the option from the state
    const dispatch = useDispatch();
    const handleSetOption = (e) => {
        const value = e.currentTarget.getAttribute('value');
        dispatch(setSelectedOption("Player 1",value));
    };

    return (
        <div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <PlayingBtn $borderc="red" value="Rock" onClick={handleSetOption}>
                    <OptionImg src={handRock} alt="Rock" />
                </PlayingBtn>

                <PlayingBtn $borderc="Blue" value="Scissor" onClick={handleSetOption}>
                    <OptionImg src={handScissor} alt="Scissor" />
                </PlayingBtn>

                <PlayingBtn $borderc="yellow" value="Paper" onClick={handleSetOption}>
                    <OptionImg src={handPaper} alt="Paper" />
                </PlayingBtn>
            </div>
            <h2 className="player" style={{ textAlign: "center" }}>{player}</h2>
            <div>{player == "Player 1" ?  "You Selected : "+ playerSelectedOption : "Computer Selected : "+comOption } </div>
        </div>
    );
}

export default PlayingBtnContainer;
