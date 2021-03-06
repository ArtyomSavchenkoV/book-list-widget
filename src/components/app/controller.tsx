import React from 'react';
import { connect } from 'react-redux';
import compose from '../../utils/compose';

import withErrorBoundary from '../hoc/with-error-boundary';

//  Import types
import { IConnect, TStore } from '../../reducers';

import Layout from './views/layout';
import LocalizationLoader from '../localization-loader';
import Landing from '../landing';
import UrlFromStoreUpdater from '../managers/url-from-store-updater';
import StoreFromUrlUpdater from '../managers/store-from-url-updater';
import BooksInProgressStorageUpdater from '../managers/books-in-progress-storage-updeter';
import BooksDoneStorageUpdater from '../managers/books-done-storage-updeter';

type TApp = {
};
const App: React.FC<TApp & IConnect<typeof storeEnhancer>> = ({
    dictionaryStatus,
}) => {
    const content = (dictionaryStatus !== 'READY' && dictionaryStatus !== 'FAILURE') ? (
        <LocalizationLoader />
    ) : (
            <Landing />
        );

    return (
        <>
            <Layout>
                {content}
            </Layout>
            <StoreFromUrlUpdater />
            <UrlFromStoreUpdater />
            <BooksInProgressStorageUpdater />
            <BooksDoneStorageUpdater />
        </>
    );
};


const mapStoreToProps = ({ applicationStateStore }: TStore) => {
    return {
        dictionaryStatus: applicationStateStore.localization.dictionaryStatus
    };
};

const mapDispatchToProps = {
};

const storeEnhancer = connect(mapStoreToProps, mapDispatchToProps);

export default compose(
    withErrorBoundary,
    storeEnhancer
)(App) as React.FC<TApp>;