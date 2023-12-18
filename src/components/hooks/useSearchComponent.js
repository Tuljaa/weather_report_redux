import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";

import {
    weatherActions,
    selectSearchRes
  } from "../saga+slice+API/weatherData.slice";

export default function useSearchComponent({ refInput, refClose, wrapperOnChange }) {
    const dispatch = useDispatch();
    const searchRes = useSelector(selectSearchRes)

    const [searchOutcomes, setSearchOutcomes] = useState([]);

    useEffect(() => {
        setSearchOutcomes(searchRes)
      }, [searchRes])

        
    const handleChange = (e) => {
        const ip = e.target.value;
        refClose.current.classList.add('clear-input-button')
        refClose.current.style.display= 'block';
        if(ip.length < 3){
          return;
        }
        wrapperOnChange(ip);
      }

    const handleSearchClick = (selectedCity) => {
        refInput.current.value = selectedCity.split(',')[0];
        setSearchOutcomes([]);
        dispatch(weatherActions.fetchStart(selectedCity))
        dispatch(weatherActions.updateSelectedCity(selectedCity))
      }
      
    const handleX = () => {
        refInput.current.value=''
        refClose.current.style.display= 'none';
        dispatch(weatherActions.resetState())
    }

    return {
        searchOutcomes,

        handleChange,
        handleX,
        handleSearchClick
    }
}
