import React from 'react';
import { connect } from 'react-redux';
import withErrorBoundary from '../hoc/with-error-boundary';
import withLocalization, { TWithLocalization } from '../hoc/with-localization';
import compose from '../../utils/compose';

import { setPage } from '../../actions';

import { TStore, IConnect } from '../../reducers';

import Layout from './views/layout';


type TProps = {

}
const Controller: React.FC<TProps & TWithLocalization & IConnect<typeof storeEnchancer>> = ({
    currentPage,
    booksToReadCount,
    booksInProgressCount,
    booksDoneCount,

    setPage,

    localize
}) => {
    
    return (
        <Layout
            onSelectPage={setPage}

            toReadText={localize('page-selector.to_read')}
            inProgressText={localize('page-selector.in_progress')}
            doneText={localize('page-selector.done')}
            booksToReadCount={booksToReadCount}
            booksInProgressCount={booksInProgressCount}
            booksDoneCount={booksDoneCount}

            currentPage={currentPage}
        />
    )
}


const mapStoreToProps = ({ applicationStateStore, booksStore }: TStore) => {
    return {
        currentPage: applicationStateStore.currentPage,
        booksToReadCount: booksStore.booksToRead.length,
        booksInProgressCount: booksStore.booksInProgress.length,
        booksDoneCount: booksStore.booksDone.length,
    }
}
const mapDispatchToProps = {
    setPage
}
const storeEnchancer = connect(mapStoreToProps, mapDispatchToProps);

export default compose(
    withErrorBoundary,
    withLocalization,
    storeEnchancer
)(Controller) as React.FC<TProps>;