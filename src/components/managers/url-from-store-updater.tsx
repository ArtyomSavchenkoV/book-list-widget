import React from 'react';
import { connect } from 'react-redux';
import { TStore, IConnect } from '../../reducers';

type TProps = {

}
const UrlFromStoreUpdater: React.FC<TProps & IConnect<typeof storeEnchancer>> = ({
    tags,
    tabs
}) => {   
    const url = new URL(`${window.location.origin}${window.location.pathname}`); 

    const tagsString = tags.reduce<string>((result, el, index) => {
        return result + (index > 0 ? ',' : '') + el;
    }, '');

    if (tagsString.length > 0) {
        url.searchParams.set('tags', tagsString)
    }
    switch (tabs) {
        case 'IN_PROGRESS': {
            url.searchParams.set('tab', 'inprogress');
            break;
        }
        case 'DONE': {
            url.searchParams.set('tab', 'done');
            break;
        }
        default: {}
    }
    
    window.history.pushState({}, '', url.href)

    return null
}


const mapStoreToProps = ({ booksStore, applicationStateStore }: TStore) => {
    return {
        tags: booksStore.selectedFilterTags,
        tabs: applicationStateStore.currentPage
    }
}
const storeEnchancer = connect(mapStoreToProps);
export default storeEnchancer(UrlFromStoreUpdater) as React.FC<TProps>;