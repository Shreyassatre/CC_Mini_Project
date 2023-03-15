import React, {useState} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement('script')
        script.src = src
        script.onload = () => {
            resolve(true)
        }
        script.onerror = () => {
            resolve(false)
        }
        document.body.appendChild(script)
    })
}

const __DEV__ = document.domain === 'localhost'

function Donation() {

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

    function isName(nameValue){
        return /^[a-zA-Z ]{2,}$/.test(name);
    }

    function isEmail(emailValue){
        return /^[A-Za-z_.0-9]{3,}@+[a-z.]{4,7}[.]{1}[comin]{2,3}$/.test(email);
    }

    function isPhone(phoneValue){
        return /^[0-9]{10}$/.test(phone);
    }

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [address, setAddress] = useState();
    const [amount, setAmount] = useState(300);
    const [nameError, setNameError] = useState();
    const [emailError, setEmailError] = useState();
    const [phoneError, setPhoneError] = useState();
    const [addressError, setAddressError] = useState();
    const [amountError, setAmountError] = useState();

    async function donate(){

        


        if(amount === undefined)
        {
            setAmountError("Enter amount to donate!");
            err_count += 1;
            Toast.fire({
                icon: 'error',
                title: 'Enter Amount !'
              })
        }
        else if(amount < 300){
            setAmountError("You can not donate less than 300 INR");
            err_count += 1;
            Toast.fire({
                icon: 'error',
                title: 'You can not donate less than 300 INR !'
              })
        }     
        else{
            setAmountError(undefined)
        }

        if(address === undefined)
        {
            setAddressError("Enter Your Address !");
            err_count += 1;
            Toast.fire({
                icon: 'error',
                title: 'Enter Your Address !'
              })
        }     
        else{
            setAddressError(undefined)
        }   

        if(email === undefined)
        {
            setEmailError("Enter Your Mail address !");
            err_count += 1;
            Toast.fire({
                icon: 'error',
                title: 'Enter Your Email id !'
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

        if(phone === undefined) {
            setPhoneError("Enter Your Phone number !");
            err_count += 1;
            Toast.fire({
                icon: 'error',
                title: 'Enter Your Phone number!'
              })
        }
        else if(!isPhone(phone)){
            setPhoneError("Invalid Phone number !");
            err_count += 1;  
            Toast.fire({
                icon: 'error',
                title: 'Invalid Phone number !'
              })
        }
        else {
            setPhoneError(undefined)
        }

        if(name === undefined) {
            setNameError("Enter Your Name !");
            err_count += 1;
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
            displayRazorpay();
        }
        
    }

    async function save_data(){
        try{
            const feedbackData = {
                name, 
                phone,
                email, 
                address, 
                amount, 
            };

            await axios.post("http://localhost:5000/donation", feedbackData);

            document.location.href = "/payment-sucess";

            Swal.fire({
            icon: 'success',
            title: 'Transaction Successful',
            text: 'Thanks for your donation, your doantion will help us to save lives',
            })

        } catch(err) {
            console.error(err);
        }

    }

    async function displayRazorpay() {

        
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

        if (!res) {
            alert('Razorpay SDK failed to load. Are you online?')
            return
        }

        const data = await fetch('http://localhost:5000/donation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount })
        }).then((t) => t.json());

        console.log(data)

        const options = {
            key: __DEV__ ? 'rzp_test_b5RTY86xi0zElh' : 'PRODUCTION_KEY',
            currency: data.currency,
            amount: 100*100,
            order_id: data.id,
            name: 'Donation',
            description: 'Thank you for nothing. Please give us some money',
            image: 'images/donate.png',
            handler: function (response) {
                save_data();
            },
            prefill: {
            name,
            email
            }
        }
        const paymentObject = new window.Razorpay(options)
        paymentObject.open()
    }


    //function for toast message
    
    var err_count = 0;

    


    return (
        <div className="container px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
        <div className="card card0 border-0">
            <div className="row d-flex">
                <form className="col-lg-6">
                    <div className="card2 card border-0 px-4 py-5">
                        <h3 className="text-center">Donation Form</h3>
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
                            <h6 className="mb-0 mt-3 text-sm">Phone :<span className="text-danger">*</span></h6>
                            <input className="input" type="phone" placeholder="Enter Your Number"
                            onChange={(e) => setPhone(e.target.value)}
                            value={phone}                            
                            />
                            <small><b className="text-danger">{phoneError}</b></small>
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
                            <h6 className="mb-0 mt-3 text-sm">Enter your address :<span className="text-danger">*</span></h6>
                            <textarea className="input" type="text" placeholder="Enter Your address"
                            onChange={(e) => setAddress(e.target.value)}
                            value={address}                            
                            />
                            <small><b className="text-danger">{addressError}</b></small>
                        </div>
                        <div className="row px-3"> 
                            <h6 className="mb-0 mt-3 text-sm">Donation Amount :<span className="text-danger">*</span></h6>
                            <input className="input" type="text" placeholder="Enter a valid email address"
                            onChange={(e) => setAmount(e.target.value)}
                            value={amount}  
                            />
                            <small><b className="text-danger">{amountError}</b></small>
                        </div>
                        <center><div className="mb-3 mt-4 px-3"> <a type="reset" className="btn btn-primary" onClick={donate}>Donate  {amount} INR</a></div></center>
                    </div>
                </form>
                <div className="col-lg-6">
                    <div className="card1 pb-5">
                        <div className="row px-3 justify-content-center border-line"> <img src="images/register.png" class="image"/> </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Donation
