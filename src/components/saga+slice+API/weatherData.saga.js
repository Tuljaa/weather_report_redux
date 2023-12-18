import { put, takeLatest, call, select } from "redux-saga/effects";
import {
    fetchSuccess,
    fetchFailed,
    weatherActions,
    updateTimelyData,
    updateSearchRes,
    getCityCordinates,
    downloadFailed
} from "./weatherData.slice";
import { getWeatherData, getCoordinates, downloadWeatherReports } from "./weatherAPI";

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

function *downloadReportsSaga({payload}) {
    const{
        cityName,
    } = payload;

    try{
        const cityLocDetails = yield select(getCityCordinates(cityName));
        const response = yield call(downloadWeatherReports, {cityLocDetails});
        const {
            list
        } = response.data;

        if (list.length !== 0) {
            const blobObj = new Blob([ JSON.stringify(list) ], { type: 'application/json' });
            const downloadURL = window.URL.createObjectURL(blobObj);
            console.log('blobObj', downloadURL)
            const aElement = document.createElement('a');
            aElement.href = downloadURL;
            aElement.download = `${cityName}.json`;
            document.body.appendChild(aElement);
            aElement.click();

            document.body.removeChild(aElement);
            window.URL.revokeObjectURL(downloadURL);
        }
    } catch (err) {
        yield put(downloadFailed(err.message));
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
    yield takeLatest(
        weatherActions.downloadStart, downloadReportsSaga,
    );
}