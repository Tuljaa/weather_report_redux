import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import rootSaga from './components/saga+slice+API/root-saga';
import createRootReducer from './components/saga+slice+API/root-reducers';

// this object make thunk middleware as false
const defaultMiddlewareConfig = {
    thunk: false,
    immutableCheck: true,
    serializableCheck: true
}
// creates an instance of SAGA middleware 
const sagaMiddleware = createSagaMiddleware();

// Now to create a Store we pass REDUCRES and MIDDLEWARE options 
// which concat the SAGA Instance as Middleware
const store = configureStore({
    reducer: createRootReducer(),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(defaultMiddlewareConfig)
    .concat(sagaMiddleware),
})

// Runs the rootSaga which starts all the sagas defined in rootSage Arr
sagaMiddleware.run(rootSaga);

export default store;