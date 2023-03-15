import React from 'react';
import {Navbar, NavLink} from 'react-bootstrap';

function PhysicalRec() {
    return (
        <div>
            <div className="about_covid">
            <div className="container-fluid">
                <img src="images/physical-health.png" className="img-fluid img_1" alt="" />
            </div>
            <div className="container heading sm-text-center">
                <h3>Recommendations - Physical health</h3>
            </div>
        
            <Navbar className="titles">
                <NavLink href="/symptoms-recommendations"><b>If You feel seek</b></NavLink>
                <NavLink href="/mental-health-recommendations"><b>Mental health</b></NavLink>
                <NavLink href="/physical-health-recommendations"><b className="active_2">Physical health</b></NavLink>
            </Navbar>

            

            <div className="container">
                <hr/>
                <h5 className="text-center mb-4">Recommendations for Physical Health Improvisation</h5>
                <h6>Implement every advice on physical health in your day to day life. It will make your immune system strong. Physical fitness will help you in enjoying every activity.</h6>
                <p>Healthy body demands healthy habits supported by balanced diet and immunity boosting foods</p>
                <p>By following recommendations, you will be able strengthen your body's immune system.</p>
                <p><b>Exercise</b> plays a vital role in keeping the immunity strong and daily routine should be set for physical activities</p>
                <li>Do Pranayama (breathing exercise) in the morning for minutes and whenever there is an opportunity of 5-10 minutes in the daytime. This will help to increase lungs muscle capacity.</li>
                <li>Do meditation: which helps to relax your mind and body thus increases your concentration</li>
                <li>Do your regular exercise for 30 minutes or walk inside the house for 30-45 minutes (minimum 5000 steps per day). Exercises help to maintain body enzymes circulation and helps to release toxic material out of the body thus cleans your body system</li>
                <li>Take Sunbath for 15 minutes by exposing maximum body parts to the sunlight either in the morning (one hour after sunrise) or evening (one hour before sunset) by standing at window or balcony but don't go out of home during the COVID 19 lockdown. If you don't have Sun exposure at home, do consult your doctor. Exposure to Sun gives Vitamin D which is needed to maintain the immune system of body</li>
                <li>Do laughter therapy for 10-15 minutes per day with family or friends online. Laughter decreases stress hormones and increases immune cells thus improving your resistance to disease.</li><br/>
                <p>if due to any unavoidable condition, you are not able to do these exercises, ensure you do Pranayama and hands & leg movement, either sitting or standing for 45-60 minutes (up to 2,000 to 3,000 times a day)</p>
                <p><b>Hygiene and Medication</b> helps to keep immune system from being overwhelmed by the attack of diseases</p>
                <li>Maintain personal cleanliness and hygiene</li>
                <li>Gargle with salt and turmeric water 3-4 times a day (Preparation: Boil water with salt and turmeric for 5 minutes and use when lukewarm)</li>
                <li>If you are suffering with any medical condition like Diabetes, Blood Pressure, Thyroid, etc. and prescribed for specific diet and medication, please follow it meticulously</li>
                <li>If you have skipped any instruction or medication given by your doctor, consult your Doctor immediately</li>
                <li>Do consult your doctor if your problems persist more than a 3 to 4 days or you are in dilemma</li>
                <br/>
                <b>Note: Do not self-medicate yourself and always consult a doctor, even with Ministry of Ayush recommended medicine. Self-medication in current situation may cause adverse impact or complication, especially if you already have health issues or are under some medication</b>
                <br/><br/>
                <p>Food gives nutrition and also works as medicine to keep you disease free. Recommended food includes adequate vitamin, mineral, carbohydrates, protein and fats to enhance body's immunity which provide resistance against infections.</p>
                <li>Drink enough water or liquid every day (minimum of 6-8 glass of water or liquid)</li>
                <li>Avoid taking alcohol, aerated drinks and smoking as it impacts your immunity - Have a Balanced Diet</li>
                <li>Add Immunity Booster Drink in daily food routine</li>
                <li>Add Powerpack Immunity Booster Salad in lunch and dinner</li>
                <li>Have a balanced diet</li>
                <br/>
                <p>If you have symptoms of fever / diarrhea / irritation in nose or throat If this problem is been persistent for more than 2 days, immediately consult your family Doctor or contact the fever clinic in corporation, district or state government hospital.</p>
            </div>
        </div>
        </div>
    )
}

export default PhysicalRec
