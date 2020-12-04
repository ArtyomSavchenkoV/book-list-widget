import { IApiService } from '../services/api-service';
import { takeEvery, put, call } from 'redux-saga/effects';

import {
    fetchBooksRequested,
    fetchBooksSuccess,
    fetchBooksFailure
} from '../actions/books-actions';

export type TSagasCommands = {
    type: 'FETCH_BOOKS_REQUEST'
};

const sagaCreator = ({ ApiService }: { ApiService: IApiService }) => function* sagaWatcher() {
    yield takeEvery('FETCH_BOOKS_REQUEST', fetchBooksRequestSagaWorkerCreator({ ApiService }))
}

const fetchBooksRequestSagaWorkerCreator = ({ ApiService }: { ApiService: IApiService }) => function* fetchBooksRequestSagaWorker(action: {
    type: 'FETCH_BOOKS_REQUEST'
}) {
    yield put(fetchBooksRequested());
    try {
        const books = yield call(() => ApiService.getBooksRequest());

        const doneLocalStorage = window.localStorage.getItem('done') || '';
        const inProgressLocalStorage = window.localStorage.getItem('inProgress') || '';
        const booksDoneMaskSet = doneLocalStorage.split(',');
        const booksInProgressMaskSet = inProgressLocalStorage.split(',');
    
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
        
        yield put(fetchBooksSuccess({ booksToRead, booksInProgress, booksDone }));
    } catch (e) {
        yield put(fetchBooksFailure());
    }
}

export default sagaCreator;