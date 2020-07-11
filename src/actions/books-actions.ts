import { TAction } from '../reducers';
import { IApiService } from '../services/api-service';


type TFetchBooksRequested = {
    (): TAction
}
const fetchBooksRequested: TFetchBooksRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUESTED'
    }
}


type TFetchBooksSuccess = {
    (books: {
        id: string,
        author: string,
        title: string,
        description: string,
        tags: string[]
    }[]): TAction
}
const fetchBooksSuccess: TFetchBooksSuccess = (books) => {
    // TODO: create books arrays by saved status 
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: {
            booksToRead: books,
            booksInProgress: [],
            booksDone: []
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
    (ApiService: IApiService): (arg0: any) => void
}
const fetchBooksRequest: IFetchBooksRequest = (ApiService) => (dispatch) => {
    dispatch(fetchBooksRequested());
    ApiService.getBooksRequest().then((request) => {
        dispatch(fetchBooksSuccess(request));
    })
        .catch(() => {
            dispatch(fetchBooksFailure());
        })
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


interface ISwitchFilterTag {
    (tag: string): TAction
}
const switchFilterTag: ISwitchFilterTag = (tag) => {
    // TODO: get tags from URL
    // TODO: switch tag
    const newTags = [tag];
    // TODO: set new tags to URL
    return {
        type: 'SET_FILTER_TAGS',
        payload: newTags
    }
}


export {
    fetchBooksRequest,
    changeBookStatus,
    switchFilterTag
}