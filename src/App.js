/* global i18n */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './i18n/localizationService';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Home from './Home/Home';
import Projects from './Projects/Projects';
import LearnProjects from './LearnProjects/LearnProjects';


function Footer() {
  const linkSource = <a 
  rel="noopener noreferrer" 
  target='_blank'
  className='font-text-link-footer' 
  href='https://github.com/rafsaf/portfolio'>{i18n("sourceCode")}</a>

  const linkApi = <a 
  rel="noopener noreferrer" 
  target='_blank'
  className='font-text-link-footer' 
  href='https://rafsaf1.eu.pythonanywhere.com/admin/'>{i18n("login")}</a>

  return (
        <div className='font-text-footer mb-2 text-center' style={{
          marginTop: '15%', 
          borderTop: '2px solid white',
          }}>
          {linkSource} &amp; {linkApi}
          <p>&#169; 2020</p>
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
        <Router basename={process.env.PUBLIC_URL}>


        <Navbar  collapseOnSelect expand="lg" className='colour-nav' variant="dark">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto" >
              <Nav.Link as={Link} to="/home">{i18n('home')}</Nav.Link>
              <Nav.Link as={Link} to="/portfolio">{i18n('myProjects')}</Nav.Link>
              <Nav.Link as={Link} to="/learn-projects">{i18n('testProjects')}</Nav.Link>
              <Dropdown as={Nav.Item}>
                <Dropdown.Toggle as={Nav.Link}>{i18n('language')}</Dropdown.Toggle>
                <Dropdown.Menu className='nav-menu-bg'>
                  <Dropdown.Item className='nav-item-bg' data-language="pl" onClick={this.changeLanguage}>{i18n('polish')}</Dropdown.Item>
                  <Dropdown.Item className='nav-item-bg' data-language="en" onClick={this.changeLanguage}>{i18n('english')}</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>;
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Route exact path="/" component={Home} />
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
