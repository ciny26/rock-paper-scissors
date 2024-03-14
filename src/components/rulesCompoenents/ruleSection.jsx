import React, { useEffect, useState } from 'react';
import PlayingBtn from "../subComponents/PlayingBtn.styled";
import OptionImg from "../subComponents/optionImage.styled";
import handRock from "../../assets/handRock.svg";
import handScissor from "../../assets/handScissor.svg";
import handPaper from "../../assets/handPaper.svg";
import Rules from "../../assets/image-rules.svg";
import "../../css_modules/rulesSection.modules.css";

const RuleSection = ({ active }) => {
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
            <section className= { `left ${isLeftVisible ? 'left-transmitted' : ''}`}>
                <PlayingBtn $borderc="red">
                    <OptionImg src={handRock} />
                </PlayingBtn>
                <PlayingBtn $borderc="blue">
                    <OptionImg src={handScissor} />
                </PlayingBtn>
                <PlayingBtn $borderc="yellow">
                    <OptionImg src={handPaper} />
                </PlayingBtn>
                {/* <img src={Rules}></img> */}
            </section>

            <span className={ `middle ${isMiddleHighlited ? 'middle-highlighted' : ''}`} ></span>


            <section className= { `right ${isRightVisible ? 'right-transmitted' : ''}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolorem dolores sit, laboriosam eligendi quod libero ducimus totam minima saepe reprehenderit accusantium fuga fugit nesciunt ea repellendus consequuntur, culpa obcaecati.
            </section>
        </div>
    );
}

export default RuleSection;
