import React, { useState } from 'react';
import { Story } from '../constants';
import SimpleChatPrompt from '../components/section/AiChatbot';
import DemoStoryMock from '../components/section/DemoStoryMock';
import DemoQuestionMock from '../components/section/DemoQuesionMock';

const MockUp = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className="grid grid-cols-4 mt-1 max-w-[65rem] mx-auto h-[75vh] w-full p-2 gap-x-1 overflow-auto">
            {/*story-line*/}
            <DemoStoryMock story={Story[0]} />
            {/*questionaire*/}
            <DemoQuestionMock
                handleOption={handleOptionChange}
                answer={selectedOption}
                story={Story[0]}
            />

            {/*ai chat bot*/}
            <div className="grid col-span-1 h-[75vh] max-h-[75vh] border-2 border-zinc-800">
                <SimpleChatPrompt />
            </div>
        </div>
    );
};

export default MockUp;
