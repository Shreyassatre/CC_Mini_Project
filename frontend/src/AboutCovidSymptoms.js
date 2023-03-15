import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutCovid.css';
// import {Navbar, NavLink} from 'react-bootstrap';
import {Navbar, NavLink} from 'react-bootstrap';
import Symptoms from './Symptoms';


function AboutCovidSymptoms() {
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
                <NavLink href="/about-covid-19-prevention"><b>Prevention</b></NavLink>
                <NavLink href="/about-covid-19-symptoms"><b className="active">Symptoms</b></NavLink>
            </Navbar>

            <Symptoms />
        </div>
    )
}

export default AboutCovidSymptoms;
