import { TAction } from '../types/actions-types';
import { TBook } from '../types/book-type';

type TFetchBooksRequested = {
    (): TAction
}
const fetchBooksRequested: TFetchBooksRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUESTED'
    }
}


type TFetchBooksSuccess = {
    (arg0: {
        booksToRead: TBook[],
        booksInProgress: TBook[],
        booksDone: TBook[]
    }): TAction
}
const fetchBooksSuccess: TFetchBooksSuccess = ({ booksToRead, booksInProgress, booksDone }) => {    
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: {
            booksToRead,
            booksInProgress,
            booksDone
        }
    }
}


type TFetchBooksFailure = {
    (): TAction
}
const fetchBooksFailure: TFetchBooksFailure = () => {
    return {
        type: 'FETCH_BOOKS_FAILURE'
    }
}


interface IFetchBooksRequest {
    (): TAction
}
const fetchBooksRequest: IFetchBooksRequest = () => {
    return {
        type: 'FETCH_BOOKS_REQUEST'
    }
}


interface IChangeBookStatus {
    (arg0: {
        id: string,
        currentStatus: 'booksToRead' | 'booksInProgress' | 'booksDone',
        newStatus: 'booksToRead' | 'booksInProgress' | 'booksDone'
    }): TAction
}
const changeBookStatus: IChangeBookStatus = (payload) => {
    return {
        type: 'CHANGE_BOOK_STATUS',
        payload
    }
}


interface ISetFilterTags {
    (tag: string[]): TAction
}
const setFilterTags: ISetFilterTags = (newTags) => {
    return {
        type: 'SET_FILTER_TAGS',
        payload: newTags
    }
}


interface ISwitchFilterTag {
    (tag: string): TAction
}
const switchFilterTag: ISwitchFilterTag = (tag) => {
    return {
        type: 'SWITCH_FILTER_TAG',
        payload: tag
    }
}


export {
    fetchBooksRequest,
    fetchBooksRequested,
    fetchBooksSuccess,
    fetchBooksFailure,
    changeBookStatus,
    setFilterTags,
    switchFilterTag
}