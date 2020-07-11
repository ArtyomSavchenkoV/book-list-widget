
import { InferableComponentEnhancerWithProps } from 'react-redux';

import applicationStateStoreReducer, { TApplicationStateStoreReducerCommands, TApplicationStateStore} from './application-state-store-reducer';
import booksStoreReducer, { TBooksStoreReducerCommands, TBooksStore} from './books-store-reducer';

/*
*   React-Redux type
*/
export type IConnect<T> = T extends InferableComponentEnhancerWithProps<infer Props, infer _>
  ? Props
  : never
;

/*
*   Commands types
*/
export type TAction = (
    TApplicationStateStoreReducerCommands
    | TBooksStoreReducerCommands
);

/*
*   Store type
*/
export type TStore = {
    applicationStateStore: TApplicationStateStore
    booksStore: TBooksStore
};

/*
*   Initial store
*/
const initStore = {
    applicationState: undefined,
    booksStore: undefined
};

/*
*   The Reducer
*/
interface IReducer {
    (arg0: TStore | {[key: string]: any}, arg1: TAction): TStore;
};
const reducer: IReducer = (store = initStore, action) => {
    switch (action.type) {

        default: return {
            ...store,
            applicationStateStore: applicationStateStoreReducer(store.applicationStateStore, action),
            booksStore: booksStoreReducer(store.booksStore, action)
        }
    }
};


export default reducer;
