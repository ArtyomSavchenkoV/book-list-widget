import React from 'react';
import { connect } from 'react-redux';
import { TStore, IConnect } from '../../reducers';
import withErrorBoundary from '../hoc/with-error-boundary';
import withApiService, { TWithApiService } from '../hoc/with-api-service';
import compose from '../../utils/compose'

import { fetchDictionaryRequest } from '../../actions';

import Layout from './views/layout';


type TProps = {
}
const Controller: React.FC<TProps & TWithApiService & IConnect<typeof storeEnchancer>> = ({
    dictionaryStatus,

    fetchDictionaryRequest,

    ApiService,
}) => {

    if (dictionaryStatus === 'EMPTY') {
        fetchDictionaryRequest(ApiService);
    }

    return (
        <Layout />
    )
}


const mapStoreToProps = ({ applicationStateStore }: TStore) => {
    return {
        dictionaryStatus: applicationStateStore.localization.dictionaryStatus
    }
}
const mapDispatchToProps = {
    fetchDictionaryRequest
}
const storeEnchancer = connect(mapStoreToProps, mapDispatchToProps);

export default compose(
    withErrorBoundary,
    withApiService,
    storeEnchancer
)(Controller) as React.FC<TProps>;