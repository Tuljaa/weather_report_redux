import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {
  weatherActions, 
  selectWeatherData,
  selectIsFetching,
  selectIsFetchFailed,
  selectError,
  clearErrorMessage
} from "../saga+slice+API/weatherData.slice";

export default function useHomePage({refInput, refClose}) {
    const dispatch = useDispatch();
    const data =  useSelector(selectWeatherData);
    const isFetching = useSelector(selectIsFetching);
    const isFetchFailed = useSelector(selectIsFetchFailed);
    const Error = useSelector(selectError)
  
    const apidata = (cityName) => {
      dispatch(weatherActions.fetchStart(cityName))
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
  
    const debounceBoundTimer = debounce(DebounceAPI, 5000)
  
    const handleChange = (e) => {
      const ip = e.target.value;
    //   refClose.current.classList.add('clear-input-button')
      refClose.current.style.display= 'block';
      if(ip.length < 3){
        return;
      }
      debounceBoundTimer(ip);
    }
    const handleX = () => {
        refInput.current.value=''
        refClose.current.style.display= 'none';
    }
    const clearError = () => {
      console.log('Clicked BROO')
      dispatch(clearErrorMessage());
    }

    return {
      data,
      isFetching,
      isFetchFailed,
      err: Error,
      clearError,
      handleX,
      handleChange
    }
}
