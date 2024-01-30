import React from 'react';
import CheckedInput from '../inputs/CheckedInput';

const DemoQuestion = ({ story, answer, handleAnswer }) => {
    if (!story || typeof story !== 'object') {
        // Handle the case where story is not available or has an unexpected format
        return <div>Loading Story...</div>;
    }

    return (
        <div className="grid grid-rows-2 col-span-1 border-2 gap-5 border-zinc-800 overflow-auto pb-10 h-[74.25vh]">
            <div className="row-span-1 pb-4 text-xs p-1.5 overflow-auto">
                <h1>Question:</h1>
                <span>{story.question}</span>
            </div>
            {story.questionTypeId === 1 && (
                <div className="grid mt-10 row-span-1 p-1.5 ">
                    <div className="grid row-span-2 ">
                        <div>
                            <CheckedInput
                                checked={answer === 1}
                                onChange={() => handleAnswer(1)}
                                option={story.qoption1}
                            />
                            <span className="pl-1.5">{story.qoption1}</span>
                        </div>
                        <div className="">
                            <CheckedInput
                                checked={answer === 2}
                                onChange={() => handleAnswer(2)}
                                option={story.qoption2}
                            />

                            <span className="pl-1.5">{story.qoption2}</span>
                        </div>
                    </div>
                </div>
            )}
            {story.questionTypeId === 3 && (
                <div className="grid mb-10 pb-10 row-span-1 p-1.5">
                    <div className="grid grid-rows-11 text-[10px] text-center font-bold mx-2">
                        <h1 className="text-lg ">Select an Answer</h1>
                        {Array.from({ length: 10 }, (_, index) => (
                            <div
                                key={index}
                                className="grid grid-cols-10 w-full">
                                <span className="text-center col-span-1 p-0.5 rounded-sm my-0.5 font-extrabold">
                                    {`${index + 1}.`}
                                </span>
                                <div
                                    onClick={() =>
                                        parseInt(handleAnswer(index + 1))
                                    }
                                    className="col-span-9 border-[1px] bg-[#0C7513] text-white my-0.5 border-black p-0.5 rounded-md hover:scale-105 hover:cursor-pointer">
                                    {story[`qoption${index + 1}`]}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default DemoQuestion;
