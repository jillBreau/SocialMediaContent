import React from 'react';
import {
  Switch,
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { faHome } from '@fortawesome/free-solid-svg-icons'
import Home from './routes/Home/Home';
import SheConnectsCanada from './routes/Organizations/SheConnectsCanada';
import JackOrgMUN from './routes/Organizations/JackOrgMUN';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <HashRouter>
        <div >
          <div id="header">
              <div id="banner">
                  <h3 id="bannerText">Social media content by Jillian Breau.</h3>
              </div>
              <div id="navBar">
                  <div id="navBarContent">
                      <div className="navBarButtons">
                        <nav>
                          <NavLink activeClassName="activeLink" exact to="/">
                            <button className="navBarButton" id="homeButton"><FontAwesomeIcon icon={faHome} /></button>
                          </NavLink>
                          <NavLink activeClassName="activeLink" exact to="/SheConnectsCanada">
                            <button className="navBarButton" id="SheConnectsCanadaButton">She Connects</button>
                          </NavLink>
                          <NavLink activeClassName="activeLink" exact to="/JackOrgMUN">
                            <button className="navBarButton" id="JackOrgMUNButton">Jack.org MUN</button>
                          </NavLink>
                        </nav>
                      </div>
                  </div>
              </div>
          </div>

          <Switch>
            <Route path="/SheConnectsCanada" component={SheConnectsCanada} />
            <Route path="/JackOrgMUN" component={JackOrgMUN} />
            <Route path="/" component={Home} />
          </Switch>
        </div>

        <div id="footer">
          <div className="horizontal">
            <div className="contact-info-container">
              <a href="https://www.linkedin.com/in/jmbreau/" title="Jillian Breau - LinkedIn">
                <FaLinkedin size="30"></FaLinkedin>
              </a>
            </div>
            <p>Contact me</p>
            <div className="contact-info-container">
              <a href="mailto:jillianbreau@gmail.com" title="Jillian Breau - email">
                <MdEmail size="30"></MdEmail>
              </a>
            </div>
          </div>
        </div>
      </HashRouter>
    );
  };
};

export default App;
