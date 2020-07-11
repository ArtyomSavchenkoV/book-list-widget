import React from 'react';
import { connect } from 'react-redux';
import withErrorBoundary from '../hoc/with-error-boundary';
import withApiService, { TWithApiService } from '../hoc/with-api-service';
import withLocalization, { TWithLocalization } from '../hoc/with-localization';
import compose from '../../utils/compose';

import { TStore, IConnect } from '../../reducers';

import { fetchBooksRequest } from '../../actions';

import Layout from './views/layout';


type TProps = {
}
const Controller: React.FC<TProps & TWithApiService & TWithLocalization & IConnect<typeof storeEnchancer>> = ({
    currentPage,
    booksList,
    booksStatus,
    fetchBooksRequest,
    ApiService,
    localize
}) => {

    switch (booksStatus) {
        case 'EMPTY': {
            fetchBooksRequest(ApiService);
            break;
        }
        default: {}
    }
    console.log(booksList);    

    return (
        <Layout />
    )
}


const mapStoreToProps = ({ applicationStateStore, booksStore }: TStore) => {
    const currentPage = applicationStateStore.currentPage;
    let booksList: typeof booksStore.booksDone = [];
    switch (currentPage) {
        case 'TO_READ': {
            booksList = booksStore.booksToRead;
            break;
        }
        case 'IN_PROGRESS': {
            booksList = booksStore.booksInProgress;
            break;
        }
        case 'DONE': {
            booksList = booksStore.booksDone;
            break;
        }
        default: { }
    }
    return {
        currentPage,
        booksList,
        booksStatus: booksStore.dataStatus
    }
}
const mapDispatchToProps = {
    fetchBooksRequest
}
const storeEnchancer = connect(mapStoreToProps, mapDispatchToProps);

export default compose(
    withErrorBoundary,
    withLocalization,
    withApiService,
    storeEnchancer
)(Controller) as React.FC<TProps>;