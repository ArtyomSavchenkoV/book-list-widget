import { IApiService } from '../services/api-service';
import { takeEvery, put, call } from 'redux-saga/effects';

import {
    fetchBooksRequested,
    fetchBooksSuccess,
    fetchBooksFailure
} from '../actions/books-actions';

export type TSagasCommands = {
    type: 'FETCH_BOOKS_REQUEST',
    payload: {
        booksInProgressMask: string,
        booksDoneMask: string
    }
};

const sagaCreator = ({ ApiService }: { ApiService: IApiService }) => function* sagaWatcher() {
    yield takeEvery('FETCH_BOOKS_REQUEST', fetchBooksRequestSagaWorkerCreator({ ApiService }))
}

const fetchBooksRequestSagaWorkerCreator = ({ ApiService }: { ApiService: IApiService }) => function* fetchBooksRequestSagaWorker(action: {
    type: 'FETCH_BOOKS_REQUEST',
    payload: {
        booksInProgressMask: string,
        booksDoneMask: string
    }
}) {
    yield put(fetchBooksRequested());
    try {
        const response = yield call(() => ApiService.getBooksRequest());
        yield put(fetchBooksSuccess({ books: response, booksInProgressMask: action.payload.booksInProgressMask, booksDoneMask: action.payload.booksDoneMask }));
    } catch (e) {
        yield put(fetchBooksFailure());
    }
}

export default sagaCreator;