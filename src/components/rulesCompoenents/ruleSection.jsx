import React, { useEffect, useState } from 'react';
import PlayingBtn from "../subComponents/PlayingBtn.styled";
import OptionImg from "../subComponents/optionImage.styled";
import handRock from "../../assets/handRock.svg";
import handScissor from "../../assets/handScissor.svg";
import handPaper from "../../assets/handPaper.svg";
import Rules from "../../assets/image-rules.svg";
import ScoreSign from "../../assets/score-sign.svg";
import "../../css_modules/rulesSection.modules.css";
import Button from '../subComponents/Button.styled';

const RuleSection = ({ active , index }) => {
    const [isLeftVisible, setIsLeftVisible] = useState(false);
    const [isMiddleHighlited, setIsMiddleHighlited] = useState(false);
    const [isRightVisible, setIsRightVisible] = useState(false);

    useEffect(() => {
        if (active) {
            setIsLeftVisible(true);
            setIsRightVisible(true);
            setIsMiddleHighlited(true)
        }
        else{
            setIsMiddleHighlited(false)
        }
    }, [active]);

    return (
        <div className="rule-container">
            {index === 1 && (
                <>
                    <section className={ `left ${isLeftVisible ? 'left-transmitted' : ''}`}>
                        <PlayingBtn $borderc="red">
                            <OptionImg src={handRock} />
                        </PlayingBtn>
                        <PlayingBtn $borderc="blue">
                            <OptionImg src={handScissor} />
                        </PlayingBtn>
                        <PlayingBtn $borderc="yellow">
                            <OptionImg src={handPaper} />
                        </PlayingBtn>
                    </section>
                    <span className={ `middle ${isMiddleHighlited ? 'middle-highlighted' : ''}`} ></span>
                    <section className={ `right ${isRightVisible ? 'right-transmitted' : ''}`}>
                        First choose one of the three options by clicking it :
                        <ol>
                            <li>The red is the Rock</li>
                            <li>The blue is the Scissor</li>
                            <li>The yellow is the Paper</li>
                        </ol>

                        
                    </section>   
                </>
            )}

            {index === 2 &&  <>
                    <section className={ `left ${isLeftVisible ? 'left-transmitted' : ''}`}>
                        <div className='holder' >
                             <Button>Play</Button>
                             <Button>reset</Button>
                        </div>
                        
                    </section>
                    <span className={ `middle ${isMiddleHighlited ? 'middle-highlighted' : ''}`} ></span>
                    <section className={ `right ${isRightVisible ? 'right-transmitted' : ''}`}>
                        Than two buttons will apear :
                        <ol>
                            <li>to start the game and give the chance to the computer to choose click on Play</li>
                            <li>to start the game from the begining click Reset</li>
                            
                        </ol>   
                    </section>
                </>}


            {index === 3 && (
                <>
                    <section className={ `left ${isLeftVisible ? 'left-transmitted' : ''}`}>
                        <div className='holder' >
                             <OptionImg src={Rules} />
                        </div>
                        
                    </section>
                    <span className={ `middle ${isMiddleHighlited ? 'middle-highlighted' : ''}`} ></span>
                    <section className={ `right ${isRightVisible ? 'right-transmitted' : ''}`}>
                    The rules are simple :
                        <ol>
                            <li> The Rock beats the Scissor</li>
                            <li> The Scissor beats the Paper</li>
                            <li> The Paper beats the Rock</li>
                            <li> If you chose the same option it will be a tie</li>
                        </ol>                    
                        </section>
                </>
            )}
            
            {index === 4 && (
                <>
                    <section className={ `left ${isLeftVisible ? 'left-transmitted' : ''}`}>
                        <div className='holder' >
                             <OptionImg src={ScoreSign} />
                        </div>
                        
                    </section>
                    <span className={ `middle ${isMiddleHighlited ? 'middle-highlighted' : ''}`} ></span>
                    <section className={ `right ${isRightVisible ? 'right-transmitted' : ''}`}>
                    The score will be counted like this :
                        <ol>
                            <li> If you won you get +1 points</li>
                            <li> If you lost you get -1 points</li>
                            <li> If you had a draw you get 0 points</li>
                        </ol>                    
                        </section>
                </>
            )}
        
        </div>
    );
}

export default RuleSection;
