import React, { useState } from "react";
import DemoQuestion from "../components/section/DemoQuestion";
import DemoStory from "../components/section/DemoStory";
import { Story } from "../constants";
import SimpleChatPrompt from "../components/section/AiChatbot";

const StoryLine = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="grid grid-cols-4 mt-1 max-w-[65rem] mx-auto h-[75vh] w-full p-2 gap-x-1 overflow-auto">
      {/*story-line*/}
      <DemoStory story={Story[0]} />
      {/*questionaire*/}
      <DemoQuestion
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

export default StoryLine;
