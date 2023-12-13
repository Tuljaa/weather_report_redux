import { put, takeLatest, call, select } from "redux-saga/effects";
import {
    fetchSuccess,
    fetchFailed,
    weatherActions,
    updateTimelyData,
    updateSearchRes,
    getCityCordinates
} from "./weatherData.slice";
import { getWeatherData, getCoordinates } from "./weatherAPI";

function *fetchWeatherDataSaga({payload}) {
    try {
        const cityLocDetails = yield select(getCityCordinates(payload));
        const response = yield call(getWeatherData, cityLocDetails);
        const {
            list
        } = response.data;
        yield put(fetchSuccess(list[0]));
        yield put(updateTimelyData({list}));
    } catch (err) {
        yield put(fetchFailed(err.message));
    }
}

function *fetchSearchResultsSaga({payload}) {
    try{
        const response = yield call(getCoordinates, payload);
        if (response.data.length !== 0) {
            yield put(updateSearchRes(response.data));
        }
    } catch (err) {
        yield put(fetchFailed(err.message));
    }
}

// Define a watcher function to watch for a specific action type
export default function* weatherDataWatcher() {
    yield takeLatest(
        weatherActions.fetchStart, fetchWeatherDataSaga,
    );
    yield takeLatest(
        weatherActions.fetchSearchResults, fetchSearchResultsSaga,
    );
}