import { Link } from "react-router-dom";
import main from "../assets/images/main-alternative.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Navigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import React from 'react';

const Landing = () => {
  const { user } = useAppContext();
  return (
    <React.Fragment>
      {user && <Navigate to="/" />}
      <Wrapper>
        <nav>
          <Logo />
        </nav>
        <div className="container page">
          <div className="info">
            <h1>
              job <span>tracking</span> app
            </h1>
            <p>
              I'm baby bicycle rights craft beer occupy seitan air plant forage.
              Tumblr before they sold out mixtape drinking vinegar yuccie
              leggings offal pitchfork celiac next level pour-over. Synth
              wayfarers ramps mustache tote bag bruh chia 8-bit marxism.
            </p>
            <Link to="/register" className="btn btn-hero">
              Login & Register
            </Link>
          </div>
          <img src={main} alt="job hunt" className="img main-img" />
        </div>
      </Wrapper>
    </React.Fragment>
  );
};

export default Landing;
