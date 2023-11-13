import React from "react";
import cloudy from '../resources/images/cloudy.png';
import day_night from '../resources/images/day-and-night.png'
import WrapperComp from '../components/HOF/WrapperComp'

const Weather = ({data}) => {

    console.log(data)

    var stylesImg = {
        margin: '10px',
        width: '40px',
        height: '40px',
        display: 'inline-block',
    };

    return(
    <div className="flip-card d-inline-block">
    <div className="flip-card-inner">
        <div className="flip-card-front">
        <img src={cloudy} alt="Icon" style={stylesImg}></img>
        <h5> <u>Temparature :</u> {data.temp}<span>&#8451;</span></h5>
        <h5><u>Temparature Max :</u>{data.temp_max}<span>&#8451;</span></h5>
        <h5> <u>Temparature Min : </u>{data.temp_min}<span>&#8451;</span></h5>
        </div>
        <div className="flip-card-back">
        <div className="d-inline-block hourly " >
        <img src={day_night} alt="Icon" style={stylesImg}></img>
        <h5><u>Feels Like :</u>{data.feels_like}<span>&#8451;</span></h5>
        <h5><u>Humidity : </u>{data.humidity}%</h5>
        <h5><u>Pressure : </u> {data.pressure}<span className="small">mb</span></h5>
        <h5><u>Pressure at Sea Level :</u> {data.sea_level}<span className="small">mb</span></h5>
       </div>
        </div>
    </div>
    </div>
)
}
export default WrapperComp(Weather);