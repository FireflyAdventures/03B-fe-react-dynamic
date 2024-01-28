import * as React from "react";
import { Link } from "react-router-dom";
import PrimaryIconButton from "../buttons/PrimaryIconButton";
import PrimaryButton from "../buttons/PrimaryButton";
import logo from "../../ffa_bannerLogo.png";
import { animateScroll as scroll } from "react-scroll";
import "./Footer.css";
const Footer = () => {
  const handleHomeLink = () => {
    // Check if the current location is the home page
    if (window.location.pathname === "/") {
      // If on the home page, scroll to the top with smooth animation
      scroll.scrollToTop({ duration: 500, smooth: "easeInOutQuart" });
    } else {
      // If not on the home page, navigate to the home page
      window.location.href = "/";
    }
  };

  return (
    <div className="Footer-container ">
      {/* ADMIN BUTTON: NEEDS CONDITIONAL */}
      <Link duration={3000} smooth={"true"} onClick={handleHomeLink}>
        <PrimaryIconButton className="Footer-logo-container">
          <img src={logo} className="Footer-logo-img" alt="logo" />
        </PrimaryIconButton>
      </Link>

      <div className="Footer-link-container">
        {/* <Link to="/">
          <PrimaryButton className="Footer-button ">Home</PrimaryButton>
        </Link>
        <Link to="/StoryInstructions">
          <PrimaryButton className="Footer-button">
            Story Instructions
          </PrimaryButton>
        </Link>

        <Link to="/storyline">
          <PrimaryButton className="Footer-button">Story Demo</PrimaryButton>
        </Link> */}

        <Link to="https://www.firefly-adventures.com">
          <PrimaryButton className="Nav-button">Home</PrimaryButton>
        </Link>
        <Link to="/mockup">
          <PrimaryButton className="Nav-button">Mockup</PrimaryButton>
        </Link>

        <Link to="/game">
          <PrimaryButton className="Nav-button">Story Demo</PrimaryButton>
        </Link>

        <Link to="/aitutor">
          <PrimaryButton className="Nav-button">AI Tutor Demo</PrimaryButton>
        </Link>
        <Link to="/creatorsportal">
          <PrimaryButton className="Nav-button">
            Creator's Portal Demo
          </PrimaryButton>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
