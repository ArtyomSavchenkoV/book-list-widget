import React from 'react';
import { connect } from 'react-redux';
import compose from '../../utils/compose';

import withLocalization, { TWithLocalization } from '../hoc/with-localization';
import withErrorBoundary from '../hoc/with-error-boundary';

import { CookiesProvider } from 'react-cookie';

//  Import types
import { IConnect, TStore } from '../../reducers';

import Layout from './views/layout';
import LocalizationLoader from '../localization-loader';
import Landing from '../landing';
import UrlFromStoreUpdater from '../managers/url-from-store-updater';
import StoreFromUrlUpdater from '../managers/store-from-url-updater';
import BooksInProgressCookieUpdater from '../managers/books-in-progress-cookie-updeter';
import BooksDoneCookieUpdater from '../managers/books-done-cookie-updeter';

type TApp = {
};
const App: React.FC<TApp & IConnect<typeof storeEnhancer> & TWithLocalization> = ({
    dictionaryStatus,
    localize
}) => {
    const content = (dictionaryStatus !== 'READY' && dictionaryStatus !== 'FAILURE') ? (
        <LocalizationLoader />
    ) : (
            <Landing />
        );

    return (
        <CookiesProvider>
            <Layout>
                {content}
            </Layout>
            <StoreFromUrlUpdater />
            <UrlFromStoreUpdater />
            <BooksInProgressCookieUpdater />
            <BooksDoneCookieUpdater />
        </CookiesProvider>
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
    storeEnhancer,
    withLocalization
)(App) as React.FC<TApp>;