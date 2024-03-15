import React, { useEffect, useState } from 'react';
import RuleSection from "../components/rulesCompoenents/ruleSection";

const GameRulesView = () => {
    const [activeSection, setActiveSection] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const sectionPositions = document.querySelectorAll('.rule-container');
            const scrollPosition = window.scrollY + (window.innerHeight /-2);

            sectionPositions.forEach((section, index) => {
                const { top, bottom } = section.getBoundingClientRect();
                if (top < scrollPosition && bottom > scrollPosition) {
                    // Delay setting active section by 300ms
                    setTimeout(() => {
                        setActiveSection(index);
                    }, 300);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <RuleSection active={activeSection === 0} index={1} />
            <RuleSection active={activeSection === 1} index={2} />
            <RuleSection active={activeSection === 2} index={3} />
            <RuleSection active={activeSection === 3} index={4} />
        </>
    );
}

export default GameRulesView;
