//  Import modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { ApiServiceProvider } from "./components/contexts/api-service-context";
import ApiServiceClass from './services/api-service';

//  Import store
import store from './store';

//  Import components
import App from './components/app';
import ErrorBoundary from './components/common/error-boundary';

const ApiService = new ApiServiceClass();

/*
*   Render
*/
ReactDOM.render((
    <Provider store={store}>
        <ErrorBoundary>
            <ApiServiceProvider value={ApiService}>
                <App />
            </ApiServiceProvider>
        </ErrorBoundary>
    </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


if (window.performance) {
    console.warn("Perfomance not supported");
}
if (performance.navigation.type === 1) {
    localStorage.clear();
}