import React from 'react';
import CheckedInput from '../inputs/CheckedInput';

const DemoQuestionMock = ({ story, handleOption, answer }) => {
    return (
        <div className="grid grid-rows-2 col-span-1 max-h-[80vh]  border-2 border-zinc-800">
            <div className="row-span-1 text-xs p-1.5">
                <span>{story.QuestionPrompt[0]}</span>
                <br />
                <br />
                <span>{story.QuestionPrompt[1]}</span>
            </div>
            <div className="grid grid-rows-3 row-span-1 p-1.5">
                <div>
                    <span className="font-bold pr-1.5">Decision:</span>
                    <span>{story.Question}</span>
                </div>

                <div className="grid row-span-2">
                    <div>
                        <CheckedInput
                            checked={answer === story.Qoption1}
                            onChange={() => handleOption(story.Qoption1)}
                            option={story.Qoption1}
                        />
                        <span className="pl-1.5">{story.Qoption1}</span>
                    </div>
                    <div className="">
                        <CheckedInput
                            checked={answer === story.Qoption2}
                            onChange={() => handleOption(story.Qoption2)}
                            option={story.Qoption1}
                        />
                        <span className="pl-1.5">{story.Qoption2}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DemoQuestionMock;
