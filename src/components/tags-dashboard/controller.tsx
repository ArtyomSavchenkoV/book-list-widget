import React from 'react'
import { connect } from 'react-redux';
import withErrorBoundary from '../hoc/with-error-boundary';
import withLocalization, { TWithLocalization } from '../hoc/with-localization';
import compose from '../../utils/compose';

import { IConnect, TStore } from '../../reducers';

import { setFilterTags, switchFilterTag } from '../../actions';

import Layout from './views/layout';

type TProps = {
}
const Controller: React.FC<TProps & TWithLocalization & IConnect<typeof storeEnchancer>> = ({
    setFilterTags,
    switchFilterTag,
    selectedFilterTags,
    localize
}) => {

    const content: JSX.Element | null = selectedFilterTags.length > 0 ? (
        <Layout
            text={localize('tags-dashboard.text')}
            clearButtonText={localize('tags-dashboard.clear_tags')}
            onClearButtonClick={() => { setFilterTags([]) }}
            tags={[]}
        />
    ) : null;

    return content
}


const mapStoreToProps = ({ booksStore }: TStore) => {
    return {
        selectedFilterTags: booksStore.selectedFilterTags
    }
}
const mapDispatchToProps = {
    setFilterTags,
    switchFilterTag
}
const storeEnchancer = connect(mapStoreToProps, mapDispatchToProps);

export default compose(
    withErrorBoundary,
    withLocalization,
    storeEnchancer
)(Controller) as React.FC<TProps>;