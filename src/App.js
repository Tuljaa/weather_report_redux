
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
 
function App() {
  const counter =  useSelector(state => state);
  const cityName = counter.handle.cityN;
  console.log(counter.weatherhandle); //promise obj

  const wdata= counter.weatherhandle

  const dispatch = useDispatch();


  const printAddress = () => {
   const weather= wdata.then((a) => {
    console.log(a.weatherdata);
      return a.weatherdata;
    });
    console.log("weather data "+weather);
    return weather;
  };
  
  printAddress();
 
  return (
    <div className="App">
     
      <input type='text' placeholder='Please enter city Name' onChange={(event)=> dispatch({type: "City",payload: event.target.value}) }/> <br></br>
      <input type='text' placeholder='Please enter country Name' onChange={(event)=> dispatch({type: "Country",payload: event.target.value}) }/> <br></br>
      
      <button type='button' onClick={ ()=> dispatch ( {type: "Submit",payload: cityName}) }>SUBMIT</button>

      <h4>Hey</h4>
    
    </div>
   
  );
}
 
export default App;