/* global i18n */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './services/localizationService';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { HashRouter as Router, Link, Route } from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects';
import LearnProjects from './pages/LearnProjects';


function Footer() {
  const linkSource = <a 
  useRef='noopener' 
  target='_blank'
  className='font-text-link-footer' 
  href='https://github.com/rafsaf/portfolio'>Source code in this repository</a>

  const linkApi = <a 
  useRef='noopener' 
  target='_blank'
  className='font-text-link-footer' 
  href='https://rafsaf1.eu.pythonanywhere.com/api/'>Link to API</a>

  return (
        <div className='font-text-footer mb-2 text-center' style={{
          marginTop: '15%', 
          borderTop: '2px solid white',
          }}>
          {linkSource} &amp; {linkApi}
          <p>@Created 2020</p>
        </div>
  );
}


class App extends React.Component {

  changeLanguage = (e) => {
    window.changeLanguage(e.target.dataset.language);
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <Router  hashType='noslash'>


        <Navbar collapseOnSelect expand="lg" className='colour-nav' variant="dark">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/home">{i18n('home')}</Nav.Link>
              <Nav.Link as={Link} to="/portfolio">{i18n('myProjects')}</Nav.Link>
              <Nav.Link as={Link} to="/learn-projects">{i18n('testProjects')}</Nav.Link>
              <NavDropdown title={i18n('language')} id="collasible-nav-dropdown">
              <NavDropdown.Item data-language="pl" onClick={this.changeLanguage}>{i18n('polish')}</NavDropdown.Item>
                <NavDropdown.Item data-language="en" onClick={this.changeLanguage}>{i18n('english')}</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Route path="/home" component={Home} />
        <Route path="/portfolio" component={Projects} />
        <Route path="/learn-projects" component={LearnProjects} />
        <footer><Footer /></footer>
        

        </Router>   
      </div>
      
    );
  }
}

export default App;
