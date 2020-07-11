import { TAction } from './index';

/*
*   Commands types
*/
export type TApplicationStateStoreReducerCommands = {
    type: 'FETCH_DICTIONARY_REQUESTED'
}  | {
    type: 'FETCH_DICTIONARY_SUCCESS',
    payload: {}
}  | {
    type: 'FETCH_DICTIONARY_FAILURE'
} ;

/*
*   Store type
*/
export type TApplicationStateStore = {
    localization: {
        dictionaryStatus: 'EMPTY' | 'LOADING' | 'READY' | 'FAILURE',
        dictionary: {}
    }
};

/*
*   Initial store
*/
const initialApplicationStateStore: TApplicationStateStore = {
    localization: {
        dictionaryStatus: 'EMPTY',
        dictionary: {}
    }
};

/*
*   The Reducer
*/
interface IApplicationStateStoreReducer {
    (arg0: TApplicationStateStore | undefined, arg1: TAction): TApplicationStateStore;
};
const applicationStateStoreReducer: IApplicationStateStoreReducer = (applicationStateStore = initialApplicationStateStore, action) => {
    switch (action.type) {
        case 'FETCH_DICTIONARY_REQUESTED': {
            return {
                ...applicationStateStore,
                localization: {
                    ...applicationStateStore.localization,
                    dictionaryStatus: 'LOADING'
                }
            }
        }


        case 'FETCH_DICTIONARY_SUCCESS': {
            return {
                ...applicationStateStore,
                localization: {
                    ...applicationStateStore.localization,
                    dictionaryStatus: 'READY',
                    dictionary: action.payload
                }
            }
        }


        case 'FETCH_DICTIONARY_FAILURE': {
            return {
                ...applicationStateStore,
                localization: {
                    ...applicationStateStore.localization,
                    dictionaryStatus: 'FAILURE'
                }
            }
        }


        default: return {
            ...applicationStateStore
        }
    }
};


export default applicationStateStoreReducer;