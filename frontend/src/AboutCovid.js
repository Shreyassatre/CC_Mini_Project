import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutCovid.css';
import Overview from './Overview';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Navbar, NavLink} from 'react-bootstrap';


function AboutCovid() {
    return (
        <div className="about_covid">
            <div className="container-fluid">
                <img src="images/mask.png" className="img-fluid img_1" alt="" />
            </div>
            <div className="container heading">
                <h1>Corona Virus</h1>
            </div>
        
            <Navbar className="titles">
                <NavLink href="/about-covid-19-overview"><b className="active">Overview</b></NavLink>
                <NavLink href="/about-covid-19-prevention"><b>Prevention</b></NavLink>
                <NavLink href="/about-covid-19-symptoms"><b>Symptoms</b></NavLink>
            </Navbar>

            <div className="container">
                <BrowserRouter>
                    <Switch>
                    <Route exact path="/about-covid-19" component={Overview} />
                    <Route exact path="/about-covid-19-overview" component={Overview} />
                    </Switch>            
                </BrowserRouter>
            </div>
        </div>
    )
}

export default AboutCovid;
