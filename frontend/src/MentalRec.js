import React from 'react';
import {Navbar, NavLink} from 'react-bootstrap';

function MentalRec() {
    return (
        <div>
            <div className="about_covid">
            <div className="container-fluid">
                <img src="images/mental-health.png" className="img-fluid img_1" alt="" />
            </div>
            <div className="container heading sm-text-center">
                <h3>Recommendations - Mental health</h3>
            </div>
        
            <Navbar className="titles">
                <NavLink href="/symptoms-recommendations"><b>If You feel seek</b></NavLink>
                <NavLink href="/mental-health-recommendations"><b className="active_2">Mental health</b></NavLink>
                <NavLink href="/physical-health-recommendations"><b>Physical health</b></NavLink>
            </Navbar>

            

            <div className="container">
                <hr/>
                <h5 className="text-center mb-4">Recommendations for Mental Health Improvisation</h5>
                <h6>Implement every advice on mental health in your day to day life. Your immunity, productivity, and knowledge retention will improve. It has many other benefits also.</h6>
                <div>
                    <b>1. Daily Routines:</b>
                    <p>In your day to day life, maintaining a daily routine will help you to cope with changes, it helps to create healthy habits, and more importantly, it helps to reduce stress levels</p>
                    <li>Your sleep is important for your overall health so sleep adequately and well.</li>
                    <li> Follow your daily routine of sleeping, waking up, brushing teeth, bath, eating food etc. which helps to maintain your body clock which is one of the sign of healthy body.</li>
                </div>
                <br/>
                <div>
                    <b>2. Positive Engagement:</b>
                    <li>Spend quality time like reading books, listening to music, painting, dancing, crafts etc. or pursue your old hobbies which will help you to improve your mood and bring positivity.</li>
                    <li>Engage in activities that helps you focus and think creatively</li>
                    <li>Spend quality time with family by having discussion on good subjects, playing games and watching movies together. Talking to friends, relatives over a phone or video call will help you to get stay connected to them. Also, this will help you to divert your mind</li>
                    <li>Talking and discussion help to look at situation differently and not feel lonely.</li>
                    <li>Ensure you don't indulge in arguments or discussion which stresses you or makes you angry. Changing the topic or just getting up and moving to another place controls the situation</li>
                    <li>Watching your favourite TV shows, listen to radio or watch movies will relax you - Do Not discuss COVID-19 related information that impacts negatively with family members, friends, relatives or on social media</li>
                    <li>Limit yourself to maximum 10-15 mins in a day on following news related to COVID-19 .</li>
                    <li>Practice saying positive things to yourself everyday</li>
                    <p className="mt-3 mb-3">Positive mind will help you combat any disease including COVID-19 and all other challenges in your life</p>
                </div>
                <div>
                    <b>3. Avoid alcohol, smoking and drugs:</b>
                    <p>Drinking and smoking aren't things which we always associate with withdrawal symptoms, but they can cause some which impact on your mental health. When you've had a few drinks you can feel more depressed and anxious the next day, and it can be harder to concentrate.</p>
                </div>
                <div>
                    <b>4. Get plenty of sunlight:</b>
                    <p>Sunlight is a great source of vitamin D. Vitamin D is a really important vitamin for our bodies and our brains. It helps our brains to release chemicals which improve our mood, like endorphins and serotonin.</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default MentalRec
