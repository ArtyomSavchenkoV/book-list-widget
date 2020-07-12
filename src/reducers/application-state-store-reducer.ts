import { TAction } from './index';

/*
*   Commands types
*/
export type TApplicationStateStoreReducerCommands = {
    type: 'FETCH_DICTIONARY_REQUESTED'
} | {
    type: 'FETCH_DICTIONARY_SUCCESS',
    payload: {}
} | {
    type: 'FETCH_DICTIONARY_FAILURE'
} | {
    type: 'SET_PAGE',
    payload: 'TO_READ' | 'IN_PROGRESS' | 'DONE'
} | {
    type: 'SET_PAGE_AND_TAGS',
    payload: {
        page: 'TO_READ' | 'IN_PROGRESS' | 'DONE',
        tags: string[]
    }
};

/*
*   Store type
*/
export type TApplicationStateStore = {
    currentPage: 'TO_READ' | 'IN_PROGRESS' | 'DONE',
    localization: {
        dictionaryStatus: 'EMPTY' | 'LOADING' | 'READY' | 'FAILURE',
        dictionary: {}
    }
};

/*
*   Initial store
*/
const initialApplicationStateStore: TApplicationStateStore = {
    currentPage: 'TO_READ',
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


        case 'SET_PAGE': {
            return {
                ...applicationStateStore,
                currentPage: action.payload
            }
        }


        case 'SET_PAGE_AND_TAGS': {
            return {
                ...applicationStateStore,
                currentPage: action.payload.page
            }
        }


        default: return {
            ...applicationStateStore
        }
    }
};


export default applicationStateStoreReducer;