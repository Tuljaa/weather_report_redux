import { createModule } from "saga-slice"
import { pipe, prop } from 'ramda';

import { returnKey } from "../UtilityFunctions";

export const states = {
    'idel': 'idel',
    'retrieving': 'retrieving',
    'noData': 'noData',
}

const name = 'weatherData'
const initialState = {
    isFetching: false,
    data: null,
    error: null,
    isFetchFailed: false,
    timelyData: {},
    searchRes: {
        cityData : []
    }
}

export const weatherDataSlice = createModule({
    name: name,
    initialState: initialState,
    reducers: {
        fetchStart: (state) => {
            state.isFetching = true;
        },
        fetchSuccess: (state, payload) => {
            state.isFetching = false;
            state.data = payload;
        },
        fetchSearchResults: (state, payload) => {
            state.searchRes.cityData = []
        },
        updateTimelyData: (state, payload) => {
            const {
                list,
            } = payload; 

            state.timelyData = list.reduce( (acc, { main:{temp}, wind: {speed}, dt_txt }) => {                
                   acc[dt_txt.split(' ')[1]] = {
                        temp,
                        speed
                    }
                    return acc;
            }, [])
        },
        updateSearchRes: (state, payload) => {
            state.searchRes.cityData = payload.reduce( (acc, { name, lat, lon, state }) => {            
                    acc[returnKey(name, state)] = {
                        lat, lon, name, state
                    }
                    return acc;
                }, {});
        },
        fetchFailed: (state, payload) => {
            state.isFetching = false;
            state.isFetchFailed = true;
            state.error = payload;
        },
        clearErrorMessage: (state) => {
            state.error = null;
        },
        resetState: () => initialState
    }
})

const selectSlice = pipe(prop(weatherDataSlice.name));
export const selectWeatherData = pipe(selectSlice, prop('data')); 
export const selectIsFetching = pipe(selectSlice, prop('isFetching'));
export const selectError = pipe(selectSlice, prop('error'));
export const selectIsFetchFailed = pipe(selectSlice, prop('isFetchFailed'));

export const selectSearchRes = pipe(selectSlice, prop('searchRes'), prop('cityData'));

export const getCityCordinates = (cityName) => (store) => pipe(selectSearchRes)(store)[cityName];

export const selectWeatherReport = pipe(selectSlice, prop('timelyData'));


export const {
    fetchStart,
    fetchSuccess,
    fetchFailed,
    updateTimelyData,
    clearErrorMessage,
    updateSearchRes,
    fetchSearchResults,

    resetState,
} = weatherDataSlice.actions

export const weatherActions = weatherDataSlice.actions;

export default weatherDataSlice.reducer;
