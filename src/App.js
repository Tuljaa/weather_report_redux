import React from "react";
import HomePage from "./components/HomePage";
import './css/App.css'; 
import Tabs from "./components/Tabs/Tabs";

const App =() => {

  return (
    <div className="app" data-test="App" >
      <h3>Weather Forecast</h3>
        <HomePage />
        <Tabs />
    </div>
  );
}
 
export default App;