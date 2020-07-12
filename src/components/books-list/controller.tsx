import React from 'react';
import { connect } from 'react-redux';
import withErrorBoundary from '../hoc/with-error-boundary';
import withApiService, { TWithApiService } from '../hoc/with-api-service';
import withLocalization, { TWithLocalization } from '../hoc/with-localization';
import compose from '../../utils/compose';

import { TStore, IConnect } from '../../reducers';

import { fetchBooksRequest, changeBookStatus } from '../../actions';

import Layout from './views/layout';
import NoticePanel from './views/notice-panel';
import BookRow from '../book-row';
import Spinner from '../common/spinner';


type TProps = {
}
const Controller: React.FC<TProps & TWithApiService & TWithLocalization & IConnect<typeof storeEnchancer>> = ({
    currentPage,
    booksList,
    booksStatus,
    fetchBooksRequest,
    changeBookStatus,
    ApiService,
    localize
}) => {

    let content: JSX.Element | JSX.Element[] = <NoticePanel><Spinner /></NoticePanel>;
    switch (booksStatus) {
        case 'EMPTY': {
            fetchBooksRequest(ApiService);
            break;
        }
        case 'READY': {
            if (booksList.length === 0) {
                content = <NoticePanel>{localize('book-list.list_is_empty')}</NoticePanel>
            } else {

                content = booksList.map((el) => {
                    return (
                        <BookRow
                            key={el.id}
                            book={el}
                            currentPage={currentPage}
                        />
                    )
                })
            }
            break;
        }
        default: { }
    }
    console.log(booksList);

    return (
        <Layout>
            {content}
        </Layout>
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
    fetchBooksRequest,
    changeBookStatus
}
const storeEnchancer = connect(mapStoreToProps, mapDispatchToProps);

export default compose(
    withErrorBoundary,
    withLocalization,
    withApiService,
    storeEnchancer
)(Controller) as React.FC<TProps>;