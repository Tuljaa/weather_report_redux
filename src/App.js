import { OutlinedInput, InputLabel, Button } from '@material-ui/core';
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import icon from './cloudy.png';
import icon1 from './day-and-night.png'
import app from './css/App.css'; 

const App =() => {
  const counter =  useSelector(state => state);
  
  const dispatch = useDispatch();

   const apidata = async (e) => {

    const APIKEY="fbf712a5a83d7305c3cda4ca8fe7ef29";
    const data= await fetch(` https://api.openweathermap.org/data/2.5/forecast?q=${counter.inputhandle.cityN}&units=metric&appid=${APIKEY}`)
                .then(response=>response.json()).then(weatherdata => {return weatherdata.list[0].main});
    dispatch({type:"Submit", payload:data});
}  

var stylesImg = {
  margin: '10px',
  width: '30px',
  height: '30px',
  display: 'inline-block',
};

  return (
    <div className="app bg-info d-inline-block" >

    <h1 className="m-2 text-center">Weather Forecast</h1>
    <hr></hr>
        
    <InputLabel className="InputLabel d-inline-block" ><strong>City Name : </strong></InputLabel>
     
      <OutlinedInput className="OutlinedInput d-inline-block" type='text' placeholder='Please enter city Name' onChange={(event)=> dispatch({type: "City",payload: event.target.value}) }/> 
      
      <InputLabel className="InputLabel d-inline-block" ><strong>Country Name : </strong></InputLabel>
      <OutlinedInput className="OutlinedInput d-inline-block" type='text' placeholder='Please enter country Name' onChange={(event)=> dispatch({type: "Country",payload: event.target.value}) }/>
      
    <Button className="d-inline-block m-5" type='button' variant="outlined" color="default" onClick={ ()=> apidata() }>SUBMIT</Button>   <hr></hr><br></br>
     
    {

    ( (counter.weatherhandle.data!== undefined) ? 

    <div className="flip-card d-inline-block">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                <img src={icon} alt="Icon" style={stylesImg}></img>
                <h5> <u>Temparature :</u> {counter.weatherhandle.data.temp}<span>&#8451;</span></h5>
                <h5><u>Temparature Max :</u>{counter.weatherhandle.data.temp_max}<span>&#8451;</span></h5>
                <h5> <u>Temparature Min : </u>{counter.weatherhandle.data.temp_min}<span>&#8451;</span></h5>
                </div>
                <div className="flip-card-back">
                <div className="d-inline-block hourly " >
                <img src={icon1} alt="Icon" style={stylesImg}></img>
                <h5><u>Feels Like :</u>{counter.weatherhandle.data.feels_like}<span>&#8451;</span></h5>
                <h5><u>Humidity : </u>{counter.weatherhandle.data.humidity}%</h5>
                <h5><u>Pressure : </u> {counter.weatherhandle.data.pressure}<span className="small">mb</span></h5>
                <h5><u>Pressure at Sea Level :</u> {counter.weatherhandle.data.sea_level}<span className="small">mb</span></h5>
               </div>
                </div>
            </div>
    </div> : null )

    }
    </div>
   
  );
}
 
export default App;