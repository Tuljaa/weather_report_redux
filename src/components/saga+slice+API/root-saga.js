import { all } from "redux-saga/effects";
import weatherDataWatcher from "./weatherData.saga";

// without 'all' effect the Saga is not getting work
// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
    yield all(
        [
            weatherDataWatcher()
        ]
    );
  }
