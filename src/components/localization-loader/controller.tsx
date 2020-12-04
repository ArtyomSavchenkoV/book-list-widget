import React from 'react';
import { connect } from 'react-redux';
import { TStore, IConnect } from '../../reducers';
import withErrorBoundary from '../hoc/with-error-boundary';
import compose from '../../utils/compose'

import { fetchDictionaryRequest } from '../../actions';

import Layout from './views/layout';


type TProps = {
}
const Controller: React.FC<TProps & IConnect<typeof storeEnchancer>> = ({
    dictionaryStatus,

    fetchDictionaryRequest,
}) => {

    if (dictionaryStatus === 'EMPTY') {
        fetchDictionaryRequest();
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
    storeEnchancer
)(Controller) as React.FC<TProps>;