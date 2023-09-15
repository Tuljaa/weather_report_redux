import { put, takeLatest, call } from "redux-saga/effects";
import {
    fetchSuccess,
    fetchFailed,
    weatherActions
} from "./weatherData.slice";
import { getWeatherData } from "./weatherAPI";

function *fetchWeatherDataSaga({payload}) {
    try {
        const response = yield call(getWeatherData, payload);
        const {
            list
        } = response.data;
        yield put(fetchSuccess(list[0]));
    } catch (err) {
        yield put(fetchFailed(err.message));
    }
}

// Define a watcher function to watch for a specific action type
export default function* weatherDataWatcher() {
    yield takeLatest(
        weatherActions.fetchStart, fetchWeatherDataSaga
    );
}