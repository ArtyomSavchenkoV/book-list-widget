import { TAction } from './index';

type TBook = {
    id: string,
    author: string,
    title: string,
    description: string,
    tags: string[]
};

/*
*   Commands types
*/
export type TBooksStoreReducerCommands = {
    type: 'FETCH_BOOKS_REQUESTED'
} | {
    type: 'FETCH_BOOKS_SUCCESS',
    payload: {
        booksToRead: TBook[],
        booksInProgress: TBook[],
        booksDone: TBook[]
    }
} | {
    type: 'FETCH_BOOKS_FAILURE'
} | {
    type: 'CHANGE_BOOK_STATUS',
    payload: {
        id: string,
        currentStatus: 'booksToRead' | 'booksInProgress' | 'booksDone',
        newStatus: 'booksToRead' | 'booksInProgress' | 'booksDone'
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
    booksToRead: TBook[],
    booksInProgress: TBook[],
    booksDone: TBook[],
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
        case 'FETCH_BOOKS_REQUESTED': {
            return {
                ...booksStore,
                dataStatus: 'LOADING'
            }
        }


        case 'FETCH_BOOKS_SUCCESS': {
            return {
                ...booksStore,
                dataStatus: 'READY',
                booksToRead: action.payload.booksToRead,
                booksInProgress: action.payload.booksInProgress,
                booksDone: action.payload.booksDone
            }
        }


        case 'FETCH_BOOKS_FAILURE': {
            return {
                ...booksStore,
                dataStatus: 'FAILURE'
            }
        }


        case 'CHANGE_BOOK_STATUS': {
            const bookIndex = booksStore[action.payload.currentStatus].findIndex((el) => el.id === action.payload.id);
            if (bookIndex < 0) {
                return {
                    ...booksStore
                }
            }
            const book = booksStore[action.payload.currentStatus][bookIndex];
            return {
                ...booksStore,
                [action.payload.currentStatus]: [
                    ...booksStore[action.payload.currentStatus].slice(0, bookIndex),
                    ...booksStore[action.payload.currentStatus].slice(bookIndex + 1)
                ],
                [action.payload.newStatus]: [
                    ...booksStore[action.payload.newStatus],
                    book
                ]
            }
        }


        case 'SET_FILTER_TAGS': {
            return {
                ...booksStore,
                selectedFilterTags: action.payload
            }
        }


        case 'SET_PAGE_AND_TAGS': {
            return {
                ...booksStore,
                selectedFilterTags: action.payload.tags
            }
        }


        default: return {
            ...booksStore
        }
    }
};


export default booksStoreReducer;