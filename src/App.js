/* global i18n */
import React, { useState } from "react";
import "./i18n/localizationService";
import "bootstrap/dist/css/bootstrap.min.css";


import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import LearnProjects from "./LearnProjects/LearnProjects";

function Footer() {

  const linkApi = (
    <a
      rel="noopener noreferrer"
      target="_blank"
      className="font-text-link-footer"
      href="https://rafsaf1.eu.pythonanywhere.com/admin/"
    >
      {i18n("login")}
    </a>
  );

  return (
    <div
      className="mb-1 mt-5 text-center container-fluid"
      style={{
        paddingTop: "5%",
        borderTop: "2px solid white",
        color: "white",
      }}
    >
      <div style={{bottom:0}}>
        {linkApi} <small>&#169;2020-2021</small>
      </div>
    </div>
  );
}

function App() {
  const [location, setLocation] = useState(window.location.pathname);
  const [language, setLanguage] = useState("pl");

  const changeLanguage = (e) => {
    window.changeLanguage(e.target.dataset.language);
    setLanguage(e.target.dataset.language);
  };

  const changeLocation = (path) => {
    setLocation(path)
  }

  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar
          collapseOnSelect
          expand="lg"
          className="colour-nav"
          variant="dark"
        >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link
                className={
                  location === "/home" ? "nav-links-clicked mr-1" : "nav-links mr-1"
                }
                onClick = {() => changeLocation("/home")}
                as={Link}
                to="/home"
              >
                {i18n("home")}
              </Nav.Link>
              <Nav.Link
                className={
                  location === "/portfolio" ? "nav-links-clicked mr-1" : "nav-links mr-1"
                }
                as={Link}
                onClick = {() => changeLocation("/portfolio")}
                to="/portfolio"
              >
                {i18n("myProjects")}
              </Nav.Link>
              <Nav.Link
                className={
                  location === "/learn-projects"
                    ? "nav-links-clicked mr-1"
                    : "nav-links mr-1"
                }
                onClick = {() => changeLocation("/learn-projects")}
                as={Link}
                to="/learn-projects"
              >
                {i18n("testProjects")}
              </Nav.Link>
              <Dropdown as={Nav.Item}>
                <Dropdown.Toggle as={Nav.Link}>
                  {i18n("language")}
                </Dropdown.Toggle>
                <Dropdown.Menu className="nav-menu-bg">
                  <Dropdown.Item
                    className="nav-item-bg"
                    data-language="pl"
                    onClick={changeLanguage}
                  >
                    {i18n("polish")}
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="nav-item-bg"
                    data-language="en"
                    onClick={changeLanguage}
                  >
                    {i18n("english")}
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/portfolio" component={Projects} />
        <Route path="/learn-projects" component={LearnProjects} />
        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export default App;
