import { TAction } from './index';

/*
*   Commands types
*/
export type TBooksStoreReducerCommands = {
    type: 'FETCH_BOOKS_REQUESTED'
} | {
    type: 'FETCH_BOOKS_SUCCESS',
    payload: {
        booksToRead: {
            id: string,
            author: string,
            title: string,
            description: string,
            tags: string[]
        }[],
        booksInProgress: {
            id: string,
            author: string,
            title: string,
            description: string,
            tags: string[]
        }[],
        booksDone: {
            id: string,
            author: string,
            title: string,
            description: string,
            tags: string[]
        }[]
    }
} | {
    type: 'FETCH_BOOKS_FAILURE'
} | {
    type: 'CHANGE_BOOK_STATUS',
    payload: {
        id: string,
        newStatus: 'TO_READ' | 'IN_PROGRESS' | 'DONE'
    }
} | {
    type: 'SET_FILTER_TAGS',
    payload: string[]
};


/*
*   Store type
*/
export type TBooksStore = {
    dataStatus: 'EMPTY' | 'LOADING' | 'READY' | 'FAILURE',
    booksToRead: {
        id: string,
        author: string,
        title: string,
        description: string,
        tags: string[]
    }[],
    booksInProgress: {
        id: string,
        author: string,
        title: string,
        description: string,
        tags: string[]
    }[],
    booksDone: {
        id: string,
        author: string,
        title: string,
        description: string,
        tags: string[]
    }[],
    selectedFilterTags: string[]
};

/*
*   Initial store
*/
const initialBooksStore: TBooksStore = {
    dataStatus: 'EMPTY',
    booksToRead: [],
    booksInProgress: [],
    booksDone: [],
    selectedFilterTags: []
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