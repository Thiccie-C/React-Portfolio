import React, {Component} from 'react';
import {Route, Link, BrowserRouter as Router, Routes} from "react-router-dom";
import Navigation from '../../components/Navigation';
import About from '../../components/About';
import Contact from '../../components/Contact';
import Portfolio from '../../components/Portfolio';
import Resume from '../../components/Resume';

class Header extends Component {   
    render() {
    return (
        <Router>
            <div className="row Header" id="header">
                <Navigation/>
            </div>
    <div className="content">
        <Routes>
          <Route exact path="/" render={() => (<Link to="/portfolio"/>)}/>
          <Route path="portfolio" element={<Portfolio/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
        </Routes>
    </div>
    </Router>
    )
}
}

export default Header;