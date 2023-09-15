import { createModule } from "saga-slice"
import { pipe, prop } from 'ramda';

const name = 'weatherData'
const initialState = {
    isFetching: false,
    data: null,
    error: null,
    isFetchFailed: false
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

export const {
    fetchStart,
    fetchSuccess,
    fetchFailed,
    clearErrorMessage
} = weatherDataSlice.actions

export const weatherActions = weatherDataSlice.actions;

export default weatherDataSlice.reducer;
