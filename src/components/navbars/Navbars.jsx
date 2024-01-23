import * as React from "react";
import { Link } from "react-router-dom";
import PrimaryIconButton from "../buttons/PrimaryIconButton";
import PrimaryButton from "../buttons/PrimaryButton";
import logo from "../../ffa_bannerLogo.png";
import "./Navbar.css";
const NavBar = () => {
  return (
    <div className="Navbar-container">
      {/* ADMIN BUTTON: NEEDS CONDITIONAL */}
      <PrimaryIconButton>
        <img src={logo} alt="logo" />
      </PrimaryIconButton>
      <div className="NavLink-container">
        <Link to="/">
          <PrimaryButton className="Nav-button">Home</PrimaryButton>
        </Link>
        <Link to="/StoryInstructions">
          <PrimaryButton className="Nav-button">About Story</PrimaryButton>
        </Link>
        s
        <Link to="/storyline">
          <PrimaryButton className="Nav-button">Story Demo</PrimaryButton>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
