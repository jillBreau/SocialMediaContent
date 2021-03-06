import React from 'react';
import {
  NavLink
} from "react-router-dom";
import './Home.css';

class Home extends React.Component {
  
  render() {
    return (
      <div className="contentContainer">
        <div className="mainContent" id="intro">
          <h1 id="post">
            Summary of Experience
          </h1>
          <h3 id="summary">
            I have experience creating social media content for two volunteer organizations.<br></br><br></br>
            I currently create Instagram, Facebook, and LinkedIn content for <a href="https://www.sheconnects.ca/">She Connects Canada</a>.<br></br><br></br>
            I have previously created and managed Instagram, Facebook, and TikTok content for the <a href="https://linktr.ee/jackorgmun">Jack.org MUN Chapter</a>.
          </h3>
          <div className="horizontalSometimes">
            <NavLink activeClassName="activeLink" exact to="/SheConnectsCanada">
              <button className="styledButton" id="navToOrgButton">See content for She Connects</button>
            </NavLink>
            <NavLink activeClassName="activeLink" exact to="/JackOrgMUN">
              <button className="styledButton" id="navToOrgButton">See content for Jack.org MUN</button>
            </NavLink>
          </div>
        </div>
      </div>
    );
  };
};

export default Home;