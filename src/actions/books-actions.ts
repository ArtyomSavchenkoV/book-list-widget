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
    (books:{
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
    } ): TAction
}
const fetchBooksSuccess: TFetchBooksSuccess = (books) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: books
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
    // TODO: make api service requesting method.
    /*ApiService.getDictionaryRequest().then((request)=>{
        console.log(request);
        
        dispatch(fetchBooksSuccess(request));
    })
    .catch(()=>{
        dispatch(fetchBooksFailure());
    })*/
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