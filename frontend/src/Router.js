import React, {useContext} from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import './App.css';
import NavBar from './NavBar';
import AboutCovid from './AboutCovid';
import AboutCovidPrevention from './AboutCovidPrevention';
import AboutCovidSymptoms from './AboutCovidSymptoms';
import SelfTest from './SelfTest';
import SelfTestMental from './SelfTestMental';
import SelfTestPhysical from './SelfTestPhysical';
import SelfTestPrecutions from './SelfTestPrecutions';
import MentalRec from './MentalRec';
import PhysicalRec from './PhysicalRec';
import SymptomsRec from './SymptomsRec';
import LatestUpdates from './LatestUpdates';
import Register from './Register'
import Login from './Login'
import AuthContext from './context/AuthContext';
import Feedback from './Feedback'
import Admin from './Admin' 
import Donation from './Donation';
import DonarInfo from './DonarInfo';
import DonationSucess from './DonationSucess';
import Update from './Update';


function Router() {

    const {loggedIn} = useContext(AuthContext)

    return (
        <BrowserRouter>
            <NavBar/>
            <Switch>
                <Route exact path="/">
                    <LatestUpdates/>
                </Route>
                <Route exact path="/about-covid-19-overview">
                    <AboutCovid/>
                </Route>
                <Route exact path="/about-covid-19-prevention">
                    <AboutCovidPrevention/>
                </Route>
                <Route exact path="/about-covid-19-symptoms">
                    <AboutCovidSymptoms/>
                </Route>
                <Route exact path="/self-test">
                    <SelfTest/>
                </Route>
                <Route exact path="/mental-assessment">
                    <SelfTestMental/>
                </Route>
                <Route exact path="/physical-assessment">
                    <SelfTestPhysical/>
                </Route>
                <Route exact path="/precutions">
                    <SelfTestPrecutions/>
                </Route>
                <Route exact path="/mental-health-recommendations">
                    <MentalRec/>
                </Route>
                <Route exact path="/physical-health-recommendations">
                    <PhysicalRec/>
                </Route>
                <Route exact path="/symptoms-recommendations">
                    <SymptomsRec/>
                </Route>
                {
                    loggedIn === false && (
                    <>
                        <Route exact path="/login">
                            <Login/>                 
                        </Route>
                        <Route exact path="/feedback">
                            <Feedback/>
                        </Route>
                        <Route exact path="/donation">
                            <Donation/>
                        </Route>
                        <Route exact path="/payment-sucess">
                            <DonationSucess/>
                        </Route>
                        <Route exact path="/admin">
                            <center className="mt-5 mb-5">
                                <h1>Error 500</h1>
                                <h3>Permission not granted</h3>
                            </center>                 
                        </Route>
                    </>
                )}
                {
                    loggedIn === true && (
                    <>
                        <Route exact path="/feedbacks">
                            <Admin/>                   
                        </Route>
                        <Route exact path="/admin">
                            <Update/>                   
                        </Route>
                        <Route exact path="/donations">
                            <DonarInfo/>
                        </Route>
                        <Route exact path="/register">
                            <Register/>
                        </Route>
                        <Route exact path="/login">
                            <center className="mt-5 mb-5">
                                <h1>Error 500</h1>
                                <h3>You are alrady logged in</h3>
                            </center>                 
                        </Route>
                        <Route exact path="/feedback">
                            <center className="mt-5 mb-5">
                                <h1>Error 500</h1>
                                <h3>Only users can give feedback</h3>
                            </center>             
                        </Route>
                    </>
                )}
                
            </Switch>
        </BrowserRouter>
    )
}

export default Router
