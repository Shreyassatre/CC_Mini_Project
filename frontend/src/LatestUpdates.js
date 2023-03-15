import React, {useEffect, useState} from 'react'
import axios from 'axios';
import './LatestUpdates.css';
import Moment from 'react-moment'


function LatestUpdates(props) {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const {data} = await axios.get("http://localhost:5000/updates");
            setData(data.map(update => ({...update, readMore: false}))); // add readMore state to each update object
        }
        fetchData();
    }, [])

    const toggleReadMore = (updateIndex) => {
        setData(data.map((update, index) => updateIndex === index ? {...update, readMore: !update.readMore} : update)); // toggle readMore state of clicked update
    }

    const formatText = (text) => {
        return text.replace(/\n/g, '<br>');
    }

    return (
        <div>
            <h1 className="text-center latest-updates-heading">Latest Updates</h1>
            <center><hr style={{width: "40%"}}/></center>
           <div className="container-fluid mt-4">   
                {
                    data.map((updates, index) => 
                        <div className="latest_updates" key={index}>
                            <div className="news-container">
                                <img src={updates.image} style={{height:'17rem', width:"auto"}} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{toggleReadMore(index)}}></img>
                                <div>
                                    <h3 onClick={()=>{toggleReadMore(index)}}>{updates.heading}</h3>
                                    <div className="date"><small className="font-italic font-bold text-secondary"><Moment format="DD MMM YYYY">{updates.date}</Moment>, <Moment format="hh:mm A">{updates.date}</Moment></small></div>
                                    <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                                    <p className="note">{updates.note}</p>
                                    <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{toggleReadMore(index)}}>{updates.readMore ? 'Show Less <<' : 'Read More >>'}</a> {/* use updates.readMore instead of global readMore */}
                                </div>
                            </div>
                            <div className="brif_news container-fluid mt-4">
                            {updates.readMore && <div>
                                <p dangerouslySetInnerHTML={{ __html: formatText(updates.news) }}></p>
                                <p><b>Source: </b>{updates.source}</p>
                            </div>}
                            </div>
                            <hr/>
                        </div>
                    )
                }
            </div>  
        </div>
    )
}

export default LatestUpdates

