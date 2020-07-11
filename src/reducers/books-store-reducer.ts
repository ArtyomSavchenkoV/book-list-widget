import { TAction } from './index';

/*
*   Commands types
*/
export type TBooksStoreReducerCommands = {
    type: null
} ;

/*
*   Store type
*/
export type TBooksStore = {
};

/*
*   Initial store
*/
const initialBooksStore: TBooksStore = {
};

/*
*   The Reducer
*/
interface IBooksStoreReducer {
    (arg0: TBooksStore | undefined, arg1: TAction): TBooksStore;
};
const booksStoreReducer: IBooksStoreReducer = (booksStore = initialBooksStore, action) => {
    switch (action.type) {


        default: return {
            ...booksStore
        }
    }
};


export default booksStoreReducer;