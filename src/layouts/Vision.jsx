 import VisionCard from "../components/card/VisionCard";
 import { vision } from "../constants";
 import { motion } from "framer-motion";
 import { textVariant } from "../utils/motion";
 import { VerticalTimeline } from "react-vertical-timeline-component"; 
 import './Layouts.css'
 const Vision = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
            <h1 className="Vision-text">Our Vision</h1>
            </motion.div>
            <div className="Vision-layout">
                <VerticalTimeline>
                    {vision.map((vision, index) => (
                        <VisionCard key={index} vision={vision} index={index + 1}/>
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};
export default Vision;