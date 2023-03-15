import React from 'react';
import {Navbar, NavLink} from 'react-bootstrap';

function SymptomsRec() {
    return (
        <div>
            <div className="about_covid">
            <div className="container-fluid">
                <img src="images/symptoms.png" className="img-fluid img_1" alt="" />
            </div>
            <div className="container heading sm-text-center">
                <h3>Recommendations - If you feel seek</h3>
            </div>
        
            <Navbar className="titles">
                <NavLink href="/symptoms-recommendations"><b className="active_2">If You feel seek</b></NavLink>
                <NavLink href="/mental-health-recommendations"><b>Mental health</b></NavLink>
                <NavLink href="/physical-health-recommendations"><b>Physical health</b></NavLink>
            </Navbar>

            

            <div className="container">
                <hr/>
                <h5 className="text-center mb-4">Recommendations - If You Feel Sick</h5>
                <div>
                    <h6>1. Stay Home and Call a Health Care Provider</h6>
                    <p>Unless it is an emergency, to reduce your risk of catching or spreading illness, stay home if you feel sick, even if your symptoms are mild. Do not go to work, school or public places, and avoid public transportation.</p>
                    <p>If your symptoms are severe or you feel like you need medical care, call before you go to to your health care provider. Describe your symptoms over the phone.</p>
                </div>
                <div>
                    <h6>2. Answer Questions to Determine Your Risk</h6>
                    <p>When you call a health care facility, you will be asked about your risks for COVID-19. Risk factors includes: </p>
                    <li>Have you had close contact with someone diagnosed with COVID-19, the disease caused by the new coronavirus? (Close contact means having been within 6 feet of that person for an extended time, or being exposed to their cough or sneeze.)</li>
                    <li>Do you have a cough, fever or chills, shortness of breath or difficulty breathing, muscle or body aches, sore throat, new loss of taste or smell, diarrhea, headache, new fatigue, nausea or vomiting, or congestion or runny nose?</li>
                    <br/>
                </div>
                <div>
                    <h6>3. Follow Your Health Care Provider’s Instructions</h6>
                    <p>Based on your answers to these questions, the care provider will provide instructions over the phone. You will be told if you need to be evaluated, and if so, what to do next. Based on your risk for COVID-19, your health care provider may recommend that you:</p>
                    <li>Continue to monitor your health and call back if you develop a fever or respiratory symptoms.</li>
                    <li>Stay home and await further instructions.</li>
                    <li>Report to a designated medical care facility for evaluation and treatment. It’s best to go alone to your appointment. Do not bring children or other family members unless you need assistance.</li>
                    <li>Go to a clinic or emergency department if you have more severe symptoms, such as higher fever and severe shortness of breath.</li>
                </div>
                <br/>
                <div>
                    <h6>4. Practice Hand Hygiene and Respiratory Etiquette</h6>
                    <p>
                        <li>If you do leave your home to go to a care facility, wear a mask so your coughs and sneezes are less likely to infect others.</li>
                        <li>Wash your hands thoroughly (for at least 20 seconds) after sneezing, blowing your nose, coughing or using the bathroom, and before preparing or eating food.</li>
                        <li>If you cough or sneeze, do so into the bend of your elbow, not your hand. Or use a tissue, and then throw it away immediately afterward.</li>
                        <li>At home, clean often-touched surfaces such as doors and doorknobs, cabinet handles, bathroom hardware, tabletops, phones, tablets and keyboards regularly with disinfectant.</li>
                    </p>
                </div>
                <div>
                    <h6>5. Stay Calm</h6>
                    <p>The possibility of having a contagious illness is scary, but doctors, nurses and other caregivers are learning more about COVID-19 every day. They are working together with national and international agencies to identify and provide care to patients while avoiding spread of the illness in the community.</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default SymptomsRec
