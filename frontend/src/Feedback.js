import React, {useState} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

function Feedback() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [query, setQuery] = useState();
    const [experience, setExperience] = useState();
    const [message, setMessage] = useState();
    const [nameError, setNameError] = useState();
    const [emailError, setEmailError] = useState();
    const [experienceError, setExperienceError] = useState();

    //function for toast message
    const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 2000,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
    
    var err_count = 0;

    function isName(nameValue){
        return /^[a-zA-Z ]{2,}$/.test(name);
    }

    function isEmail(emailValue){
        return /^[A-Za-z_.0-9]{3,}@+[a-z.]{4,7}[.]{1}[comin]{2,3}$/.test(email);
    }

    async function feedback(e){
        e.preventDefault();


        if(experience === undefined)
        {
            setExperienceError("Please select your experience !");
            err_count += 1;
            Toast.fire({
                icon: 'error',
                title: 'Select your experience !'
              })
        }
        else{
            setExperienceError(undefined);
        }


        if(email === undefined)
        {
            setEmailError("Enter Your Mail address !");
            err_count += 1;
            Toast.fire({
                icon: 'error',
                title: 'Enter your email id !'
              })
        }
        else if(!isEmail(email))
        {
            setEmailError("Invalid Email address !")
            err_count += 1;
            Toast.fire({
                icon: 'error',
                title: 'Invalid Email id !'
              })
        }
        else{
            setEmailError(undefined);
        }


        if(name === undefined) {
            setNameError("Enter Your Name !");
            err_count += 1;
            // Swal.fire('Oops...', 'Something went wrong!', 'error')
            Toast.fire({
                icon: 'error',
                title: 'Enter Your Name !'
              })
        }
        else if(!isName(name)){
            setNameError("Invalid Name !");
            err_count += 1;  
            Toast.fire({
                icon: 'error',
                title: 'Invalid Name !'
              })
        }
        else {
            setNameError(undefined)
        }

        
        if(err_count === 0)
        {
            send_data();
            setTimeout(function(){ document.location.href = '/feedback' }, 3000);
            Swal.fire({
            icon: 'success',
            title: 'Thank You...',
            text: 'Your feedback stored successfully',
            })
        }

    }

    async function send_data(){
        try{
            const feedbackData = {
                name, 
                email, 
                query, 
                experience, 
                message
            };

            await axios.post("http://localhost:5000/feedback", feedbackData);

        } catch(err) {
            console.error(err);
        }
    }

    return (
    <div className="container px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
        <div className="card card0 border-0">
            <div className="row d-flex">
                <form className="col-lg-12" onSubmit={feedback}>
                    <div className="card2 card border-0 px-4 py-5">
                        <h3 className="text-center">User Feedback</h3>
                        <center><hr className="w-50"/></center>
                        <div className="row px-3">          
                            <h6 className="mb-0 mt-3 text-sm">Name :<span className="text-danger">*</span></h6>
                            <input className="input" type="text" placeholder="Enter Your Name"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            />
                            <small><b className="text-danger">{nameError}</b></small>
                        </div>
                        <div className="row px-3"> 
                                <h6 className="mb-0 mt-3 text-sm">Email Address :<span className="text-danger">*</span></h6>
                            <input className="input" type="text" placeholder="Enter a valid email address"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            />
                            <small><b className="text-danger">{emailError}</b></small>
                        </div>
                        <div className="row px-3"> 
                            <h6 className="mb-0 mt-3 text-sm">Ask any query related COVID-19 :</h6>
                            <textarea className="input" type="text" placeholder="Enter a query if any"
                            onChange={(e) => setQuery(e.target.value)}
                            value={query}
                            />
                        </div>
                        <div className=""> 
                            <h6 className="mb-0 mt-3 text-sm">How was your experience :<span className="text-danger">*</span></h6>
                            <div className="border rounded p-3">
                                <div className="form-check mb-1 mt-1">
                                    <input className="form-check-input" type="radio" name="exampleRadios" value="Very Good" onChange={(e) => setExperience(e.target.value)}/>
                                    <label className="form-check-label" for="exampleRadios1">
                                        Very Good
                                    </label>
                                </div>
                                <div className="form-check mb-1 mt-1">
                                    <input className="form-check-input" type="radio" name="exampleRadios" value="Good" onChange={(e) => setExperience(e.target.value)}/>
                                    <label className="form-check-label" for="exampleRadios2">
                                        Good
                                    </label>
                                </div>
                                <div className="form-check mb-1 mt-1">
                                    <input className="form-check-input" type="radio" name="exampleRadios" value="Average" onChange={(e) => setExperience(e.target.value)}/>
                                    <label className="form-check-label" for="exampleRadios2">
                                        Average
                                    </label>
                                </div>
                                <div className="form-check mb-1 mt-1">
                                    <input className="form-check-input" type="radio" name="exampleRadios" value="Not Good" onChange={(e) => setExperience(e.target.value)}/>
                                    <label className="form-check-label" for="exampleRadios2">
                                        Not Good
                                    </label>
                                </div>
                            </div>
                            <small><b className="text-danger">{experienceError}</b></small>
                        </div>
                        <div className="row px-3"> 
                                <h6 className="mb-0 mt-3 text-sm">Message :</h6>
                            <textarea className="input" type="text" placeholder="Enter here any Suggetion / Message"
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                            />
                        </div>
                        <center><div className="mb-3 mt-4 px-3"> <button type="submit" className="btn btn-primary text-center btn-block w-lg-50">Send Feedback</button></div></center>
                    </div>
                    {console.log(name, email, query, experience)}
                </form>
            </div>
        </div>
    </div>
    )
}

export default Feedback

{/* <div>
            <h1>Give Your Feedback</h1>
            <form onSubmit={feedback}>
                <input type="text" placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                />
                <input type="email" placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                />
                <input type="text" placeholder="Enter your query"
                onChange={(e) => setQuery(e.target.value)}
                value={query}
                /><input type="text" placeholder="Enter experience"
                onChange={(e) => setExperience(e.target.value)}
                value={experience}
                /><input type="text" placeholder="Message"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                />
                <button type="submit">Submit</button>                
            </form>
        </div> */}