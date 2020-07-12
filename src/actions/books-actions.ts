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
    (arg0: {
        books: {
            id: string,
            author: string,
            title: string,
            description: string,
            tags: string[]
        }[],
        booksInProgressMask: string,
        booksDoneMask: string
    }): TAction
}
const fetchBooksSuccess: TFetchBooksSuccess = ({ books, booksInProgressMask, booksDoneMask }) => {
    // create books arrays by saved status 
    const booksInProgressMaskSet = booksInProgressMask.split(',');
    const booksDoneMaskSet = booksDoneMask.split(',');
    
    let booksToRead = [];
    let booksInProgress = [];
    let booksDone = [];
    for (let book of books) {
        if (booksInProgressMaskSet.includes(book.id)) {
            booksInProgress.push(book);
        } else if (booksDoneMaskSet.includes(book.id)) {
            booksDone.push(book)
        } else {
            booksToRead.push(book)
        }
    }
    
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
    (arg0: {
        ApiService: IApiService,
        booksInProgressMask: string,
        booksDoneMask: string
    }): (arg0: any) => void
}
const fetchBooksRequest: IFetchBooksRequest = ({ ApiService, booksInProgressMask, booksDoneMask }) => (dispatch) => {
    dispatch(fetchBooksRequested());
    ApiService.getBooksRequest().then((request) => {
        dispatch(fetchBooksSuccess({ books: request, booksInProgressMask, booksDoneMask }));
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
    changeBookStatus,
    setFilterTags,
    switchFilterTag
}