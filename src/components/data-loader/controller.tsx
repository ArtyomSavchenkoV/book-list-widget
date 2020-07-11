import React from 'react';
import { connect } from 'react-redux';
import { TStore, IConnect } from '../../reducers';
import withErrorBoundary from '../hoc/with-error-boundary';
import withApiService, { TWithApiService } from '../hoc/with-api-service';
import withLocalization, { TWithLocalization } from '../hoc/with-localization';
import compose from '../../utils/compose'

import { fetchDictionaryRequest, fetchBooksRequest } from '../../actions';

import Layout from './views/layout';


type TProps = {

}
const Controller: React.FC<TProps & TWithApiService & TWithLocalization & IConnect<typeof storeEnchancer>> = ({
    applicationStateStore,
    booksStore,

    fetchDictionaryRequest,
    fetchBooksRequest,

    ApiService,
    localize
}) => {
    const {
        dictionaryStatus
    } = applicationStateStore.localization;

    switch (dictionaryStatus) {
        case 'EMPTY': {
            fetchDictionaryRequest(ApiService);
            break;
        }
        case 'READY':
        case 'FAILURE': {
            if (booksStore.dataStatus === 'EMPTY') {
                fetchBooksRequest(ApiService)
            }
            break;
        }
        default: { }
    };

    return (
        <Layout
            dictionaryStatus={dictionaryStatus}
            labelText={localize('data-loader.label')}
        />
    )
}


const mapStoreToProps = ({ applicationStateStore, booksStore }: TStore) => {
    return {
        applicationStateStore,
        booksStore
    }
}
const mapDispatchToProps = {
    fetchDictionaryRequest,
    fetchBooksRequest
}
const storeEnchancer = connect(mapStoreToProps, mapDispatchToProps);

export default compose(
    withErrorBoundary,
    withApiService,
    withLocalization,
    storeEnchancer
)(Controller) as React.FC<TProps>;