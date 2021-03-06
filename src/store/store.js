//Libraries
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

//Reducers combiner
import reducer from './redux/reducers/index';

const initialState = {};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    compose(applyMiddleware(...middleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
);

export default store;