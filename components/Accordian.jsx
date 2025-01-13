"use-client";

import React, { useState } from "react";

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const accordionData = [
        {
            question: "Q : Question text goes here",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac diam eget metus malesuada venenatis. Integer scelerisque vehicula augue, ac aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac diam eget metus malesuada venenatis. Integer scelerisque vehicula augue, ac aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac diam eget metus malesuada venenatis. Integer scelerisque vehicula augue, ac aliquet.",
        },
        {
            question: "Q : Question text goes here",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac diam eget metus malesuada venenatis. Integer scelerisque vehicula augue, ac aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac diam eget metus malesuada venenatis. Integer scelerisque vehicula augue, ac aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac diam eget metus malesuada venenatis. Integer scelerisque vehicula augue, ac aliquet.",
        },
        {
            question: "Q : Question text goes here",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac diam eget metus malesuada venenatis. Integer scelerisque vehicula augue, ac aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac diam eget metus malesuada venenatis. Integer scelerisque vehicula augue, ac aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac diam eget metus malesuada venenatis. Integer scelerisque vehicula augue, ac aliquet.",
        },
        {
            question: "Q : Question text goes here",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac diam eget metus malesuada venenatis. Integer scelerisque vehicula augue, ac aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac diam eget metus malesuada venenatis. Integer scelerisque vehicula augue, ac aliquet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac diam eget metus malesuada venenatis. Integer scelerisque vehicula augue, ac aliquet.",
        },
    ];

    return (
        <div className="accordion-container space-y-4 p-4 mb-14 mt-5">
            {accordionData.map((item, index) => (
                <div
                    key={index}
                    className="accordion-item  w-full overflow-hidden border-black border-b-1 -mb-5"
                >
                    <div
                        className="accordion-header flex justify-between items-center p-4 h-[106px] cursor-pointer"
                        onClick={() => toggleAccordion(index)}
                    >
                        <h3 className="text-3xl font-semibold -mb-5">{item.question}</h3>
                        <span className="text-lg pr-5">
                            {activeIndex === index ? "▲" : "▼"}
                        </span>
                    </div>
                    {activeIndex === index && (
                        <div className="accordion-content pb-5 px-5 ml-4 text-3xl font-light">
                            {item.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordion;
