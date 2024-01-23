import logo from "../ffa_bannerLogo.png";
import fireflylogo from "../assets/firefly.png";
import "./StoryInstructions.css";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import Vision from "../layouts/Vision";
const StoryInstructions = () => {
  return (
    <div className="StoryInstructions">
      <header className="StoryInstructions-header">
        <div className="StoryInstructions-header-image-container">
          <div
            className="StoryInstructions-mission-header"
            id="StoryInstructions-mission-header"
            name="StoryInstructions-mission-header"
          >
            <img
              src={
                "https://i0.wp.com/www.marshmallowranch.com/wp-content/uploads/2017/05/IMG_0061.jpg?w=500&ssl=1"
              }
              className="StoryInstructions-header-img-img"
              alt="logo"
            />
          </div>
          <div className="StoryInstructions-header-text">
            A firefly illuminates
            <br /> with their magical light.
          </div>
        </div>
        {/*Our mission statement*/}
        <div className="StoryInstructions-mission ">
          <h1 className="StoryInstructions-mission-text ">
            Demonstration Orientation & Instructions
          </h1>
          <span className="StoryInstructions-mission-span">
            The Firefly Adventures demostration displays an engaging children's
            story and regularly presents the student with problems to solve that
            are tied to the story. If the student answers incorrectly or needs
            help solution the problem, an AI tutor is able to help. The AI tutor
            is prompted with knowledge about the story, the question, question
            domain, and grade appropriate problem solving methods appropriate.
            The questions, answers, and problem solving methods are aligned to
            Common Core Teaching Standards. Firefly Adventures story creator are
            teachers, tutors, and artists who earn royalties from their work.
            Intellectual property (IP)is protected, promoted, and sold through
            various channels including this interactive problem solving
            experience. We imagine a digital publishing business model which
            rewards Teacher and Artist creativity, productivity, and inspiration
            through publication and monetization of IP aligned to common
            standards. Here are the main points to see in the demonstration:{" "}
          </span>
          {/* Founding father Image*/}
          <div className="Founding-image-container ">
            <img className="Founding-image" src={fireflylogo} alt="founders" />
            <div className="Founding-text StoryInstructions-mission-text">
              Key Points
            </div>
          </div>
        </div>
        {/* Our Vision*/}
        <div className="StoryInstructions-mission">
          <Vision />
        </div>
      </header>
    </div>
  );
};

export default StoryInstructions;
