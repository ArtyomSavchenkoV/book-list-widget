import React from 'react';
import { connect } from 'react-redux';
import withErrorBoundary from '../hoc/with-error-boundary';
import withLocalization, { TWithLocalization } from '../hoc/with-localization';
import compose from '../../utils/compose';

import { TStore, IConnect } from '../../reducers';

import { fetchBooksRequest } from '../../actions';

import Layout from './views/layout';
import NoticePanel from './views/notice-panel';
import BookRow from '../book-row';
import Spinner from '../common/spinner';


type TProps = {
}
const Controller: React.FC<TProps & TWithLocalization & IConnect<typeof storeEnchancer>> = ({
    currentPage,
    booksList,
    selectedFilterTags,
    booksStatus,
    fetchBooksRequest,
    localize
}) => {
    let content: JSX.Element | JSX.Element[] = <NoticePanel><Spinner /></NoticePanel>;
    switch (booksStatus) {
        case 'EMPTY': {
            fetchBooksRequest();
            break;
        }
        case 'READY': {
            const booksElements = booksList.filter((book) => {
                if (selectedFilterTags.length === 0) {
                    return true;
                }
                return selectedFilterTags.reduce<boolean>((prevResult, tag) => {
                    return prevResult === false ? false : book.tags.includes(tag)
                }, true);
            }).map((el) => {
                return (
                    <BookRow
                        key={el.id}
                        book={el}
                        currentPage={currentPage}
                    />
                )
            })
            if (booksElements.length === 0) {
                content = <NoticePanel>{localize('book-list.list_is_empty')}</NoticePanel>
            } else {
                content = booksElements;
            }
            break;
        }
        case 'FAILURE': {
            content = <NoticePanel>{localize('book-list.fetch_books_failure')}</NoticePanel>;
            break;
        }
        default: { }
    }
    

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
        booksStatus: booksStore.dataStatus,
        selectedFilterTags: booksStore.selectedFilterTags
    }
}
const mapDispatchToProps = {
    fetchBooksRequest
}
const storeEnchancer = connect(mapStoreToProps, mapDispatchToProps);

export default compose(
    withErrorBoundary,
    withLocalization,
    storeEnchancer
)(Controller) as React.FC<TProps>;