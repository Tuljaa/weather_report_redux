import React from "react";
import HomePage from "./components/HomePage";
import './css/App.css'; 
import WrapperComp from "./components/HOF/WrapperComp";

const App =() => {

  return (
    <div className="app" data-test="App" >
      <h2>Weather Forecast</h2>
        <HomePage />
        {/* <WrapperComp /> props to this will get passed to wrapperComponent */}
    </div>
  );
}
 
export default App;