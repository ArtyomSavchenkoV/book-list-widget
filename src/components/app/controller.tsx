import React from 'react';
import { connect } from 'react-redux';
import compose from '../../utils/compose';

import withLocalization, { TWithLocalization } from '../hoc/with-localization';
import withErrorBoundary from '../hoc/with-error-boundary';

//  Import types
import { IConnect, TStore } from '../../reducers';

import Layout from './views/layout';
import LocalizationLoader from '../localization-loader';
import Landing from '../landing';

type TApp = {
};
const App: React.FC<TApp & IConnect<typeof storeEnhancer> & TWithLocalization> = ({
    applicationStateStore,
    booksStore,
    localize
}) => {

    const content = booksStore.dataStatus !== 'READY' ? (
        <LocalizationLoader />
    ) : (
        <Landing />
    );
    
    return (
        <Layout title={localize('app.title')}>
            {content}
        </Layout>
    );
};


const mapStoreToProps = ({ applicationStateStore, booksStore }: TStore) => {
    return {
        applicationStateStore,
        booksStore
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