import React, {useState} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

function Update() {

    const [heading, setHeading] = useState();
    const [note, setNote] = useState();
    const [news, setNews] = useState();
    const [newsError, setNewsError] = useState();
    const [source, setSource] = useState();
    const [headingError, setHeadingError] = useState();
    const [noteError, setNoteError] = useState();
    const [sourceError, setSourceError] = useState();
    const [image, setImage] = useState({img:""});


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

    async function feedback(e){
        e.preventDefault();


        if(heading === undefined)
        {
            setHeadingError("Please Enter heading !");
            err_count += 1;
            Toast.fire({
                icon: 'error',
                title: 'Please enter heading'
              })
        }
        else{
            setHeadingError(undefined);
        }

        if(note === undefined)
        {
            setNoteError("Please enter note!");
            err_count += 1;
            Toast.fire({
                icon: 'error',
                title: 'Please enter note'
              })
        }
        else{
            setNoteError(undefined);
        }

        if(news === undefined)
        {
            setNewsError("Please Please enter news");
            err_count += 1;
            Toast.fire({
                icon: 'error',
                title: 'Please enter news'
              })
        }
        else{
            setNewsError(undefined);
        }

        if(source === undefined)
        {
            setSourceError("Please Please enter source");
            err_count += 1;
            Toast.fire({
                icon: 'error',
                title: 'Please enter source'
              })
        }
        else{
            setSourceError(undefined);
        }



        
        if(err_count === 0)
        {   
            send_data();
            setTimeout(function(){ document.location.href = '/admin' }, 3000);
            Swal.fire({
            icon: 'success',
            title: 'Thank You...',
            text: 'Your feedback stored successfully',
            })
        }

    }

    const handleFileUpload=async(e)=>{
        const file = e.target.files[0];
        const base64 = await convertToBase64(file)
        setImage(base64)
        console.log(base64)
    }

    async function send_data(){
        setNews(news.replace(/(?:\r\n|\r|\n)/g, '\\n'))
        try{
            const feedbackData = {
                heading, 
                note, 
                news, 
                source,
                image
            };

            await axios.post("http://localhost:5000/updates", feedbackData);

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
                        <h3 className="text-center">Update News</h3>
                        <center><hr className="w-50"/></center>
                        <div className="row px-3">          
                            <h6 className="mb-0 mt-3 text-sm">Heading :<span className="text-danger">*</span></h6>
                            <input className="input" type="text"
                            onChange={(e) => setHeading(e.target.value)}
                            value={heading}
                            />
                            <small><b className="text-danger">{headingError}</b></small>
                        </div>
                        <div className="row px-3"> 
                                <h6 className="mb-0 mt-3 text-sm">Note :<span className="text-danger">*</span></h6>
                            <input className="input" type="text"
                            onChange={(e) => setNote(e.target.value)}
                            value={note}
                            />
                            <small><b className="text-danger">{noteError}</b></small>
                        </div>
                        <div className="row px-3"> 
                            <h6 className="mb-0 mt-3 text-sm">News :</h6>
                            <textarea rows="10" className="input" type="text"
                            onChange={(e) => setNews(e.target.value)}
                            value={news}
                            />
                            <small><b className="text-danger">{newsError}</b></small>
                        </div>
                        <div className="row px-3"> 
                                <h6 className="mb-0 mt-3 text-sm">Source :</h6>
                            <input className="input" type="text"
                            onChange={(e) => setSource(e.target.value)}
                            value={source}
                            />
                            <small><b className="text-danger">{sourceError}</b></small>
                        </div>
                        <div className="row px-3"> 
                            <h6 className="mb-0 mt-3 text-sm">Image/Thumbnail :</h6>
                            <input className="input" type="file"
                            accept='.jpeg, .png, .jpg, .svg'
                            onChange={(e) => handleFileUpload(e)}
                            />
                        </div>
                        <center><div className="mb-3 mt-4 px-3"> <button type="submit" className="btn btn-primary text-center btn-block w-lg-50">Submit</button></div></center>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Update

function convertToBase64(file){
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result)
        };
        fileReader.onerror=(error)=>{
            reject(error)
        }
    })
}

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