import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducer from './reducers';
/**
 * Use the string as an action, and dispatch it.
 *
 * @param middleware function which transforms strings to actions for dispatching.
 *
 * @return dispatched action.
 */
const stringMiddleware = () => (dispatch) => (action) => {
    if (typeof action === 'string') {
        return dispatch({
            type: action
        });
    }
    return dispatch(action)
};

/**
 * Insert an "action type" string into the log.
 */
const logMiddleware = (Store) => (dispatch) => (action) => {
    console.log(`Command to Reducer: ${action.type}`);
    return dispatch(action);
};

/**
 * Create store with the action string converter, thunk and logger middleware.
 */
const store = createStore(
    reducer,
    applyMiddleware(
        thunkMiddleware,
        stringMiddleware,
        logMiddleware
    ));

export default store;
