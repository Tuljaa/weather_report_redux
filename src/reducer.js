import { combineReducers } from 'redux'
const inputfields = {
    cityN:"",
    countryN:""
}

const weatherdata ={
    data:[]
 
};

const reducer = (initialState={inputfields}, action) => {
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

    const  weatherReducer = (initialState1={weatherdata}, action)=>{
        switch (action.type) {
                case "Submit":
                   return {
                        ...initialState1,
                        data : action.payload,
                    }
            
            default:
                return initialState1;
        }
};

    const rootReducer = combineReducers({
        inputhandle: reducer,
        weatherhandle : weatherReducer
    }); 

export default rootReducer;

