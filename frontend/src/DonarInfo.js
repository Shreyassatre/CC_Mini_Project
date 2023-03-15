import React, {useEffect, useState} from 'react'
import axios from 'axios';
import './Admin.css'
import Moment from 'react-moment'

function DonarInfo(props) {

    const [data, setData] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const {data} = await axios.get("http://localhost:5000/donation");
            setData(data);
        }
        fetchData();
    }, [])

    var mail = undefined;

    const names = [];
    const emails = [];
    const phones = [];
    const addresses = [];
    const amounts = [];
    const dates = [];

    for(var i=0; i<(data.length); i++){
        names.push(data[i]['name']);
        emails.push(data[i]['email']);
        phones.push(data[i]['phone']);
        addresses.push(data[i]['address']);
        amounts.push(data[i]['amount']);
        dates.push(data[i]['date'])
    }

    return (
        <div className="container-fluid">
            <h1 className="text-center latest-updates-heading">Donar Information</h1>
            <center><hr style={{width: "40%"}}/></center>
            <div className="row feedbackes-container ml-1 mr-1">
            {
                names[0] != null ?
                (<div className="col-lg-4 col-md-5 col-sm-12 mb-1 mt-2 rounded mx-auto border card donations">
                    <div>
                        <div>
                            <div className="name mb-1 mt-2"><b>Name: </b>{names[0]}</div>
                            <div className="phone mb-1 mt-2"><b>Phone: </b>{phones[0]}</div>
                            <div className="email mb-1 mt-2"><b>Email Address: </b>{emails[0]}</div>
                            <div className="address mb-1 mt-2"><b>Address: </b>{addresses[0]}</div>
                            <div className="experience mb-1 mt-2"><b>Donation Amount: </b>{amounts[0]}</div>
                            
                            <div className="date mb-3 mt-3"><small className="font-italic font-bold text-secondary"><Moment format="DD MMM YYYY">{dates[0]}</Moment>, <Moment format="hh:mm A">{dates[0]}</Moment></small></div>
                         <div>
                             <a className="btn btn-success donar_btn" href={`mailto:${emails[0]}`}>Send Mail</a>
                         </div>
                        </div>
                    </div>
                </div>):<div>Feedbackes are not avilabble</div>
            }
            {
                names[1] != null ?
                (<div className="col-lg-4 col-md-5 col-sm-12 mb-1 mt-2 rounded mx-auto border card donations">
                    <div>
                        <div>
                            <div className="name mb-1 mt-2"><b>Name: </b>{names[1]}</div>
                            <div className="phone mb-1 mt-2"><b>Phone: </b>{phones[1]}</div>
                            <div className="email mb-1 mt-2"><b>Email Address: </b>{emails[1]}</div>
                            <div className="address mb-1 mt-2"><b>Address: </b>{addresses[1]}</div>
                            <div className="experience mb-1 mt-2"><b>Donation Amount: </b>{amounts[1]}</div>
                            
                            <div className="date mb-3 mt-3"><small className="font-italic font-bold text-secondary"><Moment format="DD MMM YYYY">{dates[1]}</Moment>, <Moment format="hh:mm A">{dates[1]}</Moment></small></div>
                         <div>
                             <a className="btn btn-success donar_btn" href={`mailto:${emails[1]}`}>Send Mail</a>
                         </div>
                        </div>
                    </div>
                </div>):<div></div>
            }
            {
                names[2] != null ?
                (<div className="col-lg-4 col-md-5 col-sm-12 mb-1 mt-2 rounded mx-auto border card donations">
                    <div>
                        <div>
                            <div className="name mb-1 mt-2"><b>Name: </b>{names[2]}</div>
                            <div className="phone mb-1 mt-2"><b>Phone: </b>{phones[2]}</div>
                            <div className="email mb-1 mt-2"><b>Email Address: </b>{emails[2]}</div>
                            <div className="address mb-1 mt-2"><b>Address: </b>{addresses[2]}</div>
                            <div className="experience mb-1 mt-2"><b>Donation Amount: </b>{amounts[2]}</div>
                            
                            <div className="date mb-3 mt-3"><small className="font-italic font-bold text-secondary"><Moment format="DD MMM YYYY">{dates[2]}</Moment>, <Moment format="hh:mm A">{dates[2]}</Moment></small></div>
                         <div>
                             <a className="btn btn-success donar_btn" href={`mailto:${emails[2]}`}>Send Mail</a>
                         </div>
                        </div>
                    </div>
                </div>):<div></div>
            }
            {
                names[3] != null ?
                (<div className="col-lg-4 col-md-5 col-sm-12 mb-1 mt-2 rounded mx-auto border card donations">
                    <div>
                        <div>
                            <div className="name mb-1 mt-2"><b>Name: </b>{names[3]}</div>
                            <div className="phone mb-1 mt-2"><b>Phone: </b>{phones[3]}</div>
                            <div className="email mb-1 mt-2"><b>Email Address: </b>{emails[3]}</div>
                            <div className="address mb-1 mt-2"><b>Address: </b>{addresses[3]}</div>
                            <div className="experience mb-1 mt-2"><b>Donation Amount: </b>{amounts[3]}</div>
                            
                            <div className="date mb-3 mt-3"><small className="font-italic font-bold text-secondary"><Moment format="DD MMM YYYY">{dates[3]}</Moment>, <Moment format="hh:mm A">{dates[3]}</Moment></small></div>
                         <div>
                             <a className="btn btn-success donar_btn" href={`mailto:${emails[3]}`}>Send Mail</a>
                         </div>
                        </div>
                    </div>
                </div>):<div></div>
            }
            {
                names[4] != null ?
                (<div className="col-lg-4 col-md-5 col-sm-12 mb-1 mt-2 rounded mx-auto border card donations">
                    <div>
                        <div>
                            <div className="name mb-1 mt-2"><b>Name: </b>{names[4]}</div>
                            <div className="phone mb-1 mt-2"><b>Phone: </b>{phones[4]}</div>
                            <div className="email mb-1 mt-2"><b>Email Address: </b>{emails[4]}</div>
                            <div className="address mb-1 mt-2"><b>Address: </b>{addresses[4]}</div>
                            <div className="experience mb-1 mt-2"><b>Donation Amount: </b>{amounts[4]}</div>
                            
                            <div className="date mb-3 mt-3"><small className="font-italic font-bold text-secondary"><Moment format="DD MMM YYYY">{dates[4]}</Moment>, <Moment format="hh:mm A">{dates[4]}</Moment></small></div>
                         <div>
                             <a className="btn btn-success donar_btn" href={`mailto:${emails[4]}`}>Send Mail</a>
                         </div>
                        </div>
                    </div>
                </div>):<div></div>
            }
            {
                names[5] != null ?
                (<div className="col-lg-4 col-md-5 col-sm-12 mb-1 mt-2 rounded mx-auto border card donations">
                    <div>
                        <div>
                            <div className="name mb-1 mt-2"><b>Name: </b>{names[5]}</div>
                            <div className="phone mb-1 mt-2"><b>Phone: </b>{phones[5]}</div>
                            <div className="email mb-1 mt-2"><b>Email Address: </b>{emails[5]}</div>
                            <div className="address mb-1 mt-2"><b>Address: </b>{addresses[5]}</div>
                            <div className="experience mb-1 mt-2"><b>Donation Amount: </b>{amounts[5]}</div>
                            
                            <div className="date mb-3 mt-3"><small className="font-italic font-bold text-secondary"><Moment format="DD MMM YYYY">{dates[5]}</Moment>, <Moment format="hh:mm A">{dates[5]}</Moment></small></div>
                         <div>
                             <a className="btn btn-success donar_btn" href={`mailto:${emails[5]}`}>Send Mail</a>
                         </div>
                        </div>
                    </div>
                </div>):<div></div>
            }
            {
                names[6] != null ?
                (<div className="col-lg-4 col-md-5 col-sm-12 mb-1 mt-2 rounded mx-auto border card donations">
                    <div>
                        <div>
                            <div className="name mb-1 mt-2"><b>Name: </b>{names[6]}</div>
                            <div className="phone mb-1 mt-2"><b>Phone: </b>{phones[6]}</div>
                            <div className="email mb-1 mt-2"><b>Email Address: </b>{emails[6]}</div>
                            <div className="address mb-1 mt-2"><b>Address: </b>{addresses[6]}</div>
                            <div className="experience mb-1 mt-2"><b>Donation Amount: </b>{amounts[6]}</div>
                            
                            <div className="date mb-3 mt-3"><small className="font-italic font-bold text-secondary"><Moment format="DD MMM YYYY">{dates[6]}</Moment>, <Moment format="hh:mm A">{dates[6]}</Moment></small></div>
                         <div>
                             <a className="btn btn-success donar_btn" href={`mailto:${emails[6]}`}>Send Mail</a>
                         </div>
                        </div>
                    </div>
                </div>):<div></div>
            }
            {
                names[7] != null ?
                (<div className="col-lg-4 col-md-5 col-sm-12 mb-1 mt-2 rounded mx-auto border card donations">
                    <div>
                        <div>
                            <div className="name mb-1 mt-2"><b>Name: </b>{names[7]}</div>
                            <div className="phone mb-1 mt-2"><b>Phone: </b>{phones[7]}</div>
                            <div className="email mb-1 mt-2"><b>Email Address: </b>{emails[7]}</div>
                            <div className="address mb-1 mt-2"><b>Address: </b>{addresses[7]}</div>
                            <div className="experience mb-1 mt-2"><b>Donation Amount: </b>{amounts[7]}</div>
                            
                            <div className="date mb-3 mt-3"><small className="font-italic font-bold text-secondary"><Moment format="DD MMM YYYY">{dates[7]}</Moment>, <Moment format="hh:mm A">{dates[7]}</Moment></small></div>                         <div>
                             <a className="btn btn-success donar_btn" href={`mailto:${emails[7]}`}>Send Mail</a>
                         </div>
                        </div>
                    </div>
                </div>):<div></div>
            }
            {
                names[8] != null ?
                (<div className="col-lg-4 col-md-5 col-sm-12 mb-1 mt-2 rounded mx-auto border card donations">
                    <div>
                        <div>
                            <div className="name mb-1 mt-2"><b>Name: </b>{names[8]}</div>
                            <div className="phone mb-1 mt-2"><b>Phone: </b>{phones[8]}</div>
                            <div className="email mb-1 mt-2"><b>Email Address: </b>{emails[8]}</div>
                            <div className="address mb-1 mt-2"><b>Address: </b>{addresses[8]}</div>
                            <div className="experience mb-1 mt-2"><b>Donation Amount: </b>{amounts[8]}</div>
                            
                            <div className="date mb-3 mt-3"><small className="font-italic font-bold text-secondary"><Moment format="DD MMM YYYY">{dates[8]}</Moment>, <Moment format="hh:mm A">{dates[8]}</Moment></small></div>                         <div>
                             <a className="btn btn-success donar_btn" href={`mailto:${emails[8]}`}>Send Mail</a>
                         </div>
                        </div>
                    </div>
                </div>):<div></div>
            }
            {
                names[9] != null ?
                (<div className="col-lg-4 col-md-5 col-sm-12 mb-1 mt-2 rounded mx-auto border card donations">
                    <div>
                        <div>
                            <div className="name mb-1 mt-2"><b>Name: </b>{names[9]}</div>
                            <div className="phone mb-1 mt-2"><b>Phone: </b>{phones[9]}</div>
                            <div className="email mb-1 mt-2"><b>Email Address: </b>{emails[9]}</div>
                            <div className="address mb-1 mt-2"><b>Address: </b>{addresses[9]}</div>
                            <div className="experience mb-1 mt-2"><b>Donation Amount: </b>{amounts[9]}</div>
                            
                            <div className="date mb-3 mt-3"><small className="font-italic font-bold text-secondary"><Moment format="DD MMM YYYY">{dates[9]}</Moment>, <Moment format="hh:mm A">{dates[9]}</Moment></small></div>                         <div>
                             <a className="btn btn-success donar_btn" href={`mailto:${emails[9]}`}>Send Mail</a>
                         </div>
                        </div>
                    </div>
                </div>):<div></div>
            }
            {
                names[10] != null ?
                (<div className="col-lg-4 col-md-5 col-sm-12 mb-1 mt-2 rounded mx-auto border card donations">
                    <div>
                        <div>
                            <div className="name mb-1 mt-2"><b>Name: </b>{names[10]}</div>
                            <div className="phone mb-1 mt-2"><b>Phone: </b>{phones[10]}</div>
                            <div className="email mb-1 mt-2"><b>Email Address: </b>{emails[10]}</div>
                            <div className="address mb-1 mt-2"><b>Address: </b>{addresses[10]}</div>
                            <div className="experience mb-1 mt-2"><b>Donation Amount: </b>{amounts[10]}</div>
                            
                            <div className="date mb-3 mt-3"><small className="font-italic font-bold text-secondary"><Moment format="DD MMM YYYY">{dates[10]}</Moment>, <Moment format="hh:mm A">{dates[10]}</Moment></small></div>
                         <div>
                             <a className="btn btn-success donar_btn" href={`mailto:${emails[10]}`}>Send Mail</a>
                         </div>
                        </div>
                    </div>
                </div>):<div></div>
            }
            {
                names[11] != null ?
                (<div className="col-lg-4 col-md-5 col-sm-12 mb-1 mt-2 rounded mx-auto border card donations">
                    <div>
                        <div>
                            <div className="name mb-1 mt-2"><b>Name: </b>{names[11]}</div>
                            <div className="phone mb-1 mt-2"><b>Phone: </b>{phones[11]}</div>
                            <div className="email mb-1 mt-2"><b>Email Address: </b>{emails[11]}</div>
                            <div className="address mb-1 mt-2"><b>Address: </b>{addresses[11]}</div>
                            <div className="experience mb-1 mt-2"><b>Donation Amount: </b>{amounts[11]}</div>
                            
                            <div className="date mb-3 mt-3"><small className="font-italic font-bold text-secondary"><Moment format="DD MMM YYYY">{dates[11]}</Moment>, <Moment format="hh:mm A">{dates[11]}</Moment></small></div>
                         <div>
                             <a className="btn btn-success donar_btn" href={`mailto:${emails[11]}`}>Send Mail</a>
                         </div>
                        </div>
                    </div>
                </div>):<div></div>
            }
            {
                names[12] != null ?
                (<div className="col-lg-4 col-md-5 col-sm-12 mb-1 mt-2 rounded mx-auto border card donations">
                    <div>
                        <div>
                            <div className="name mb-1 mt-2"><b>Name: </b>{names[12]}</div>
                            <div className="phone mb-1 mt-2"><b>Phone: </b>{phones[12]}</div>
                            <div className="email mb-1 mt-2"><b>Email Address: </b>{emails[12]}</div>
                            <div className="address mb-1 mt-2"><b>Address: </b>{addresses[12]}</div>
                            <div className="experience mb-1 mt-2"><b>Donation Amount: </b>{amounts[12]}</div>
                            
                            <div className="date mb-3 mt-3"><small className="font-italic font-bold text-secondary"><Moment format="DD MMM YYYY">{dates[12]}</Moment>, <Moment format="hh:mm A">{dates[12]}</Moment></small></div>
                         <div>
                             <a className="btn btn-success donar_btn" href={`mailto:${emails[12]}`}>Send Mail</a>
                         </div>
                        </div>
                    </div>
                </div>):<div></div>
            }
            {
                names[13] != null ?
                (<div className="col-lg-4 col-md-5 col-sm-12 mb-1 mt-2 rounded mx-auto border card donations">
                    <div>
                        <div>
                            <div className="name mb-1 mt-2"><b>Name: </b>{names[13]}</div>
                            <div className="phone mb-1 mt-2"><b>Phone: </b>{phones[13]}</div>
                            <div className="email mb-1 mt-2"><b>Email Address: </b>{emails[13]}</div>
                            <div className="address mb-1 mt-2"><b>Address: </b>{addresses[13]}</div>
                            <div className="experience mb-1 mt-2"><b>Donation Amount: </b>{amounts[13]}</div>
                            
                            <div className="date mb-3 mt-3"><small className="font-italic font-bold text-secondary"><Moment format="DD MMM YYYY">{dates[13]}</Moment>, <Moment format="hh:mm A">{dates[13]}</Moment></small></div>
                         <div>
                             <a className="btn btn-success donar_btn" href={`mailto:${emails[13]}`}>Send Mail</a>
                         </div>
                        </div>
                    </div>
                </div>):<div></div>
            }
            {
                names[14] != null ?
                (<div className="col-lg-4 col-md-5 col-sm-12 mb-1 mt-2 rounded mx-auto border card donations">
                    <div>
                        <div>
                            <div className="name mb-1 mt-2"><b>Name: </b>{names[14]}</div>
                            <div className="phone mb-1 mt-2"><b>Phone: </b>{phones[14]}</div>
                            <div className="email mb-1 mt-2"><b>Email Address: </b>{emails[14]}</div>
                            <div className="address mb-1 mt-2"><b>Address: </b>{addresses[14]}</div>
                            <div className="experience mb-1 mt-2"><b>Donation Amount: </b>{amounts[14]}</div>
                            
                            <div className="date mb-3 mt-3"><small className="font-italic font-bold text-secondary"><Moment format="DD MMM YYYY">{dates[14]}</Moment>, <Moment format="hh:mm A">{dates[14]}</Moment></small></div>
                         <div>
                             <a className="btn btn-success donar_btn" href={`mailto:${emails[14]}`}>Send Mail</a>
                         </div>
                        </div>
                    </div>
                </div>):<div></div>
            }
            {
                names[15] != null ?
                (<div className="col-lg-4 col-md-5 col-sm-12 mb-1 mt-2 rounded mx-auto border card donations">
                    <div>
                        <div>
                            <div className="name mb-1 mt-2"><b>Name: </b>{names[15]}</div>
                            <div className="phone mb-1 mt-2"><b>Phone: </b>{phones[15]}</div>
                            <div className="email mb-1 mt-2"><b>Email Address: </b>{emails[15]}</div>
                            <div className="address mb-1 mt-2"><b>Address: </b>{addresses[15]}</div>
                            <div className="experience mb-1 mt-2"><b>Donation Amount: </b>{amounts[15]}</div>
                            
                            <div className="date mb-3 mt-3"><small className="font-italic font-bold text-secondary"><Moment format="DD MMM YYYY">{dates[15]}</Moment>, <Moment format="hh:mm A">{dates[15]}</Moment></small></div>
                         <div>
                             <a className="btn btn-success donar_btn" href={`mailto:${emails[15]}`}>Send Mail</a>
                         </div>
                        </div>
                    </div>
                </div>):<div></div>
            }
            {
                names[16] != null ?
                (<div className="col-lg-4 col-md-5 col-sm-12 mb-1 mt-2 rounded mx-auto border card donations">
                    <div>
                        <div>
                            <div className="name mb-1 mt-2"><b>Name: </b>{names[16]}</div>
                            <div className="phone mb-1 mt-2"><b>Phone: </b>{phones[16]}</div>
                            <div className="email mb-1 mt-2"><b>Email Address: </b>{emails[16]}</div>
                            <div className="address mb-1 mt-2"><b>Address: </b>{addresses[16]}</div>
                            <div className="experience mb-1 mt-2"><b>Donation Amount: </b>{amounts[16]}</div>
                            
                            <div className="date mb-3 mt-3"><small className="font-italic font-bold text-secondary"><Moment format="DD MMM YYYY">{dates[16]}</Moment>, <Moment format="hh:mm A">{dates[16]}</Moment></small></div>
                         <div>
                             <a className="btn btn-success donar_btn" href={`mailto:${emails[16]}`}>Send Mail</a>
                         </div>
                        </div>
                    </div>
                </div>):<div></div>
            }
            {
                names[17] != null ?
                (<div className="col-lg-4 col-md-5 col-sm-12 mb-1 mt-2 rounded mx-auto border card donations">
                    <div>
                        <div>
                            <div className="name mb-1 mt-2"><b>Name: </b>{names[17]}</div>
                            <div className="phone mb-1 mt-2"><b>Phone: </b>{phones[17]}</div>
                            <div className="email mb-1 mt-2"><b>Email Address: </b>{emails[17]}</div>
                            <div className="address mb-1 mt-2"><b>Address: </b>{addresses[17]}</div>
                            <div className="experience mb-1 mt-2"><b>Donation Amount: </b>{amounts[17]}</div>
                            
                            <div className="date mb-3 mt-3"><small className="font-italic font-bold text-secondary"><Moment format="DD MMM YYYY">{dates[17]}</Moment>, <Moment format="hh:mm A">{dates[17]}</Moment></small></div>
                         <div>
                             <a className="btn btn-success donar_btn" href={`mailto:${emails[17]}`}>Send Mail</a>
                         </div>
                        </div>
                    </div>
                </div>):<div></div>
            }
            {
                names[18] != null ?
                (<div className="col-lg-4 col-md-5 col-sm-12 mb-1 mt-2 rounded mx-auto border card donations">
                    <div>
                        <div>
                            <div className="name mb-1 mt-2"><b>Name: </b>{names[18]}</div>
                            <div className="phone mb-1 mt-2"><b>Phone: </b>{phones[18]}</div>
                            <div className="email mb-1 mt-2"><b>Email Address: </b>{emails[18]}</div>
                            <div className="address mb-1 mt-2"><b>Address: </b>{addresses[18]}</div>
                            <div className="experience mb-1 mt-2"><b>Donation Amount: </b>{amounts[18]}</div>
                            
                            <div className="date mb-3 mt-3"><small className="font-italic font-bold text-secondary"><Moment format="DD MMM YYYY">{dates[18]}</Moment>, <Moment format="hh:mm A">{dates[18]}</Moment></small></div>
                         <div>
                             <a className="btn btn-success donar_btn" href={`mailto:${emails[18]}`}>Send Mail</a>
                         </div>
                        </div>
                    </div>
                </div>):<div></div>
            }
            {
                names[19] != null ?
                (<div className="col-lg-4 col-md-5 col-sm-12 mb-1 mt-2 rounded mx-auto border card donations">
                    <div>
                        <div>
                            <div className="name mb-1 mt-2"><b>Name: </b>{names[19]}</div>
                            <div className="phone mb-1 mt-2"><b>Phone: </b>{phones[19]}</div>
                            <div className="email mb-1 mt-2"><b>Email Address: </b>{emails[19]}</div>
                            <div className="address mb-1 mt-2"><b>Address: </b>{addresses[19]}</div>
                            <div className="experience mb-1 mt-2"><b>Donation Amount: </b>{amounts[19]}</div>
                            
                            <div className="date mb-3 mt-3"><small className="font-italic font-bold text-secondary"><Moment format="DD MMM YYYY">{dates[19]}</Moment>, <Moment format="hh:mm A">{dates[19]}</Moment></small></div>
                         <div>
                             <a className="btn btn-success donar_btn" href={`mailto:${emails[19]}`}>Send Mail</a>
                         </div>
                        </div>
                    </div>
                </div>):<div></div>
            }
            {
                names[20] != null ?
                (<div className="col-lg-4 col-md-5 col-sm-12 mb-1 mt-2 rounded mx-auto border card donations">
                    <div>
                        <div>
                            <div className="name mb-1 mt-2"><b>Name: </b>{names[20]}</div>
                            <div className="phone mb-1 mt-2"><b>Phone: </b>{phones[20]}</div>
                            <div className="email mb-1 mt-2"><b>Email Address: </b>{emails[20]}</div>
                            <div className="address mb-1 mt-2"><b>Address: </b>{addresses[20]}</div>
                            <div className="experience mb-1 mt-2"><b>Donation Amount: </b>{amounts[20]}</div>
                            
                            <div className="date mb-3 mt-3"><small className="font-italic font-bold text-secondary"><Moment format="DD MMM YYYY">{dates[20]}</Moment>, <Moment format="hh:mm A">{dates[20]}</Moment></small></div>
                         <div>
                             <a className="btn btn-success donar_btn" href={`mailto:${emails[20]}`}>Send Mail</a>
                         </div>
                        </div>
                    </div>
                </div>):<div></div>
            }
                
            </div>
        </div>
    )
}

export default DonarInfo

// {
//     data.map(feedback => 
//         <div className="mt-4">
//             <div class="feedback-container">
//                 <div className="col-lg-8 col-sm-12 col-md-5 container donations">
//                     <div className="name"><b>Name: </b>{feedback.name}</div>
//                     <div className="email"><b>Email Address: </b>{feedback.email}</div>
//                     <div className="query"><b>Query: </b>{feedback.query}</div>
//                     <div className="experience"><b>Donation Amount: </b>{feedback.experience}</div>
//                     <div className="message"><b>Message: </b>{feedback.message}</div><br/>
//             
//                     <div>
//                         <a className="btn btn-success donar_btn" href={mail}>Send Mail</a>
//                     </div>
//                 </div>
                
//             </div>
//             <hr/>
//         </div>
//     )
// }