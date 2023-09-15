// This file combines all the reducers
import { combineReducers } from "redux";
import { weatherDataSlice } from '../saga+slice+API/weatherData.slice';

// Combining All the Slices in the APP
const slices = [
    weatherDataSlice
]

const setProperty = (key, value, object) => ({ ...object, [key]: value});

const aggregareSliceReducers = (acc, slice) => setProperty(slice.name, slice.reducer, acc);

// Using Reducer we are creating an Object in { key : value } format 
// Output is [sliceName] : sliceValue
const createRootReducer = () => combineReducers(
    slices.reduce(aggregareSliceReducers, {}),
);

export default createRootReducer;
