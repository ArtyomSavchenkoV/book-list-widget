import React from 'react';
import { connect } from 'react-redux';
import compose from '../../utils/compose';

import withLocalization, { TWithLocalization } from '../hoc/with-localization';
import withErrorBoundary from '../hoc/with-error-boundary';

//  Import types
import { IConnect, TStore } from '../../reducers';

import Layout from './views/layout';

type TApp = {
};
const App: React.FC<TApp & IConnect<typeof storeEnhancer> & TWithLocalization> = ({
    localize
}) => {
    return (
        <Layout title={localize('app.title')}>
        </Layout>
    );
};


const mapStoreToProps = ({ }: TStore) => {
    return {
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