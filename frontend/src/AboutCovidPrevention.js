import React from 'react'
import './AboutCovid.css';
import Prevention from './Prevention';
// import {Navbar, NavLink} from 'react-bootstrap';
import {Navbar, NavLink} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';


function AboutCovidPrevention() {
    return (
        <div className="about_covid">
            <div className="container-fluid">
                <img src="images/mask.png" className="img-fluid img_1" alt="" />
            </div>
            <div className="container heading">
                <h1>Corona Virus</h1>
            </div>

            <Navbar className="titles">
                <NavLink href="/about-covid-19-overview"><b>Overview</b></NavLink>
                <NavLink href="/about-covid-19-prevention"><b className="active">Prevention</b></NavLink>
                <NavLink href="/about-covid-19-symptoms"><b>Symptoms</b></NavLink>
            </Navbar>

            <Prevention />
        </div>
    )
}

export default AboutCovidPrevention;
