import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./VisionCard.css";

const VisionCard = ({ vision, index }) => {
  const isOdd = index % 2 === 1;
  return (
    <VerticalTimelineElement
      className={`vertical-timeline-element--work ${
        isOdd ? "flex justify-start" : "flex justify-end"
      }`}
      contentStyle={{
        background: "rgb(148 163 184)",
        color: "rgb(27, 24, 24)",
      }}
      contentArrowStyle={{ borderRight: "solid  rgb(33, 150, 243)" }}
      iconStyle={{
        background: "rgb(203 213 225)",
        color: "rgb(27, 24, 24, 50%)",
      }}
      icon={`${index}.`}
    >
      <div>
        <p>{vision.vision}</p>
      </div>
    </VerticalTimelineElement>
  );
};

export default VisionCard;
