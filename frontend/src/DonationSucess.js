import React from 'react'
import "./Admin.css";

function DonationSucess() {
    return (
        <div>
            <center className="mb-3">
                <img className="sucess_img" src="images/thankyou.png"/>
                <p className="message">Your donation has been processed sucessfully.</p>
                <p className="message">Your donation will help us to fight against this pandamic situation & save lives.</p>
                <img src="images/earth.jpeg" style={{height: "50vh", width: "50vw", borderRadius: "15px"}}/>
            </center>
        </div>
    )
}

export default DonationSucess
