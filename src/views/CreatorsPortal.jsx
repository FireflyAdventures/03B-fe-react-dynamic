// import logo from "../ffa_bannerLogo.png";
// import fireflylogo from "../assets/firefly.png";
import "./CreatorsPortal.css";
// import { motion } from "framer-motion";
// import { fadeIn, textVariant } from "../utils/motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
// import Vision from "../layouts/Vision";

const CreatorsPortal = () => {
  return (
    <div className="container px-4 px-lg-5">
      <div className="row gx-4 gx-lg-5 align-items-center my-5">
        <div className="col-lg-4">
          <div className="col-lg-12 text-center">
            <div className="row gx-4 gx-lg-5 align-items-center">
              <div className="col-lg-4">
                {/* <div className="grid col-span-1 .custom-width-class border-2"></div> */}
                <div className="grid col-span-1 .custom-width-class"></div>
                <div className="grid col-span-1 h-[75vh] max-h-[75vh] border-2 border-zinc-800"></div>
                {/* <div className="grid col-span-1 h-[75vh] max-h-[75vh] border-2 border-zinc-800"></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorsPortal;
