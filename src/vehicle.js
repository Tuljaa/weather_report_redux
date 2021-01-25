import { combineReducers } from 'redux'
const vehicle = {
    cityN:"",
    countryN:""
}

const weatherdata ={
        
};

const reducer = (initialState={vehicle}, action) => {

    //console.log("In reducer");

    switch (action.type) {
    case "City":
    return {
        ...initialState,
          cityN : action.payload,
    };
    case "Country":
    return {
        ...initialState,
          countryN :action.payload,
    };
    default:
      return initialState;
  }
};

    const  weatherReducer =async (initialState1={weatherdata}, action)=>{

        //console.log("In WeatherReducer");
        switch (action.type) {
                case "Submit":
                    //alert(action.payload);
                    const APIKEY="fbf712a5a83d7305c3cda4ca8fe7ef29";
                    const data= await fetch(` https://api.openweathermap.org/data/2.5/forecast?q=${action.payload}&units=metric&appid=${APIKEY}`)
                    .then(response=>response.json()).then(weatherdata => {return weatherdata.city});
                    //const weatherfetchdata= await data.json();
                    //const wdata= await data;
                   console.log(data);
                   return {
                        ...initialState1,
                        weatherdata : data,
                    }
            
            default:
                return initialState1;
        }
};

    const rootReducer = combineReducers({
        handle: reducer,
        weatherhandle : weatherReducer
    }); 
export default rootReducer;

