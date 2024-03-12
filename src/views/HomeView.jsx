import ScoreBar from "../components/ScoreBar";
import PlayingBtnContainer from "../components/PlayingBtnContainer";
import Button from "../components/subComponents/Button.styled";
import { useSelector } from "react-redux";
import "../css_modules/Home.modules.css"
import { useState } from "react";


const play = () => {
    
    const computerOption = getRandomOption(); // Generating a random option for the computer
    return computerOption; // returninging the selected computer option
    console.log(computerOption)
    
}

function getRandomOption() {
    const Possibilities = ["Rock", "Scissors", "Paper"]; // Array of possible options
    // Generate a random number between 0 and 2 (inclusive) to select a random option from the array
    const randomNumber = Math.floor(Math.random() * 3);
    return Possibilities[randomNumber]; // Returning the randomly selected option
}





const HomeView = () => {

    const compareResults = ()=>{
        setComOption(play())
        console.log("yeah")
    }


    const selectedOption = useSelector(status=>status.Poption)
    const [comOption , setComOption] = useState("")
    return ( <>
    Home
    <ScoreBar/>
    <div className="playing-field">
        <PlayingBtnContainer player="Player 1" className ="playing-container" ></PlayingBtnContainer>
        <div className="play-button-holder">
            {selectedOption ? (
                        <>
                            <Button onClick={
                                ()=>compareResults()
                            
                            }>Play</Button>
                            <Button>Reset</Button>
                        </>
                    ) : ""}
        </div>
        <PlayingBtnContainer player="Computer" className ="playing-container" comOption = {comOption}></PlayingBtnContainer>
    </div>
   
    </> );
}
 
export default HomeView;