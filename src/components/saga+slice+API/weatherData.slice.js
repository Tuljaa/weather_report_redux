import { createModule } from "saga-slice"
import { pipe, prop, map } from 'ramda';

const name = 'weatherData'
const initialState = {
    isFetching: false,
    data: null,
    error: null,
    isFetchFailed: false,
    timelyData: {},
    searchRes:{
        key:[],
        entity:{}
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
            state.searchRes.entity = {}
        },
        updateTimelyData: (state, payload) => {
            const {
                list,
            } = payload;

            state.timelyData = map(({ main:{temp}, wind: {speed}, rain, dt_txt }) => {
                console.log(temp,speed,rain, dt_txt.slice(12), dt_txt);
                
                    // [dt_txt.slice(12)]: {
                    //     temp,
                    //     speed
                    // }
                
            }, list )
            console.log(state.timelyData)
        },
        updateSearchRes: (state, payload) => {
            state.searchRes.key = [ ...new Set(
                map(({ name }) => (
                    name
                ), payload)
            ) ]

            state.searchRes.entity = map(({ name, lat, lon, state }) => ({
                [ name ] : {
                    name, lat, lon, state
                }
            }), payload);
        },
        fetchFailed: (state, payload) => {
            state.isFetching = false;
            state.isFetchFailed = true;
            state.error = payload;
        },
        clearErrorMessage: (state) => {
            state.error = null;
        }
    }
})

const selectSlice = pipe(prop(weatherDataSlice.name));
export const selectWeatherData = pipe(selectSlice, prop('data')); 
export const selectIsFetching = pipe(selectSlice, prop('isFetching'));
export const selectError = pipe(selectSlice, prop('error'));
export const selectIsFetchFailed = pipe(selectSlice, prop('isFetchFailed'));

export const selectSearchRes = pipe(selectSlice, prop('searchRes'));

export const {
    fetchStart,
    fetchSuccess,
    fetchFailed,
    updateTimelyData,
    clearErrorMessage,
    updateSearchRes,
    fetchSearchResults,
} = weatherDataSlice.actions

export const weatherActions = weatherDataSlice.actions;

export default weatherDataSlice.reducer;
