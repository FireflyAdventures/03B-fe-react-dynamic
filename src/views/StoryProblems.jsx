import React, { useState } from 'react';
import DemoQuestion from '../components/section/DemoQuestion';
import DemoStory from '../components/section/DemoStory';
import services from '../services/services';
import { useEffect } from 'react';
//import SimpleChatPrompt from "../components/section/AiChatbot";
import { Story } from '../constants';
const StoryProblems = () => {
    const [allStories, setAllStories] = useState([]);
    const [storyStep, setStoryStep] = useState(0);
    const [answer, setAnswer] = useState(null);
    useEffect(() => {
        const fetchAll = async () => {
            try {
                // Assuming services.storyLines() returns a promise
                await services
                    .fullStory()
                    .then(allStoryLinesSuccess)
                    .catch(allStoryLinesError);
            } catch (error) {
                console.error('Error fetching story lines:', error);
            }
        };

        fetchAll();
    }, []);
    const handleAnswer = (answer) => {
        setAnswer(answer);
    };

    const allStoryLinesSuccess = (result) => {
        let newResult = result.filter((story) => {
            return story.storyId === 1;
        });
        setAllStories(newResult);
    };

    const allStoryLinesError = (errr) => {
        console.log(errr);
    };

    useEffect(() => {
        const nextStep = () => {
            const currentStory = allStories[storyStep];

            if (
                currentStory &&
                currentStory.correctAnswerOption === parseInt(answer)
            ) {
                if (storyStep < allStories.length - 1) {
                    setStoryStep((prev) => prev + 1);
                } else {
                    setStoryStep(1);
                }
            } else {
                // Handle the case where the answer is incorrect
            }
        };

        nextStep();
    }, [answer, storyStep, allStories]);
    console.log(allStories, storyStep);
    return (
        <div className="grid grid-cols-4 mt-1 max-w-[80rem] mx-auto h-[75vh] w-full m-20 p-12 gap-x-1">
            {/*story-line*/}
            <DemoStory story={allStories[storyStep]} />
            {/*questionaire*/}
            <DemoQuestion
                answer={answer}
                story={allStories[storyStep]}
                handleAnswer={handleAnswer}
            />
            {/* ai chat bot
      <div className="grid col-span-1 h-[75vh] max-h-[75vh] border-2 border-zinc-800">
        <SimpleChatPrompt />
      </div> */}
        </div>
    );
};

export default StoryProblems;
