import { useSelector, useDispatch } from "react-redux";

import {
  weatherActions, 
  selectWeatherData,
  selectIsFetching,
  selectError,
  clearErrorMessage,
} from "../saga+slice+API/weatherData.slice";

export default function useHomePage() {
    const dispatch = useDispatch();
    const data =  useSelector(selectWeatherData);
    const isFetching = useSelector(selectIsFetching);
    const Error = useSelector(selectError)
  
    const apidata = (cityName) => {
      dispatch(weatherActions.fetchSearchResults(cityName))
    }    

    const DebounceAPI = async (queryParam) => {
      apidata(queryParam[0]);
    }

    //Debounce is creating a new timer instance each time handleChange made call to debounce
    //hence call debounce only once and make sure we call returned function multiple times from handler.
    const debounce = (func, delay) => {
      let timer;
      return function(...value){
        // console.log('timer', timer); // Shouldnt Be Undefined
        if(timer) clearTimeout(timer);
        timer = setTimeout(() => {
         func.call(this, value);
        }, delay);
      }
    }
  
    const wrapperOnChange = debounce(DebounceAPI, 3000)

    const clearError = () => {
      dispatch(clearErrorMessage());
    }

    return {
      data,
      isFetching,
      err: Error,

      clearError,
      wrapperOnChange,
    }
}
