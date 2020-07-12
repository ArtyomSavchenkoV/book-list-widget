import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { IConnect } from '../../reducers';

import { setPageAndTags } from '../../actions';

type TProps = {

}
const UrlFromStoreUpdater: React.FC<TProps & IConnect<typeof storeEnchancer>> = ({
    setPageAndTags
}) => {
    setPageAndTags(getPageAndTags());

    useEffect(() => {
        window.addEventListener('popstate', () => setPageAndTags(getPageAndTags()));
        return () => {
            window.removeEventListener('popstate', () => setPageAndTags(getPageAndTags()))
        }
    })

    return null
}


const mapStoreToProps = () => {
    return {}
}
const mapDispatchToProps = {
    setPageAndTags
}
const storeEnchancer = connect(mapStoreToProps, mapDispatchToProps);
export default storeEnchancer(UrlFromStoreUpdater) as React.FC<TProps>;


const getPageAndTags: () => { page: 'TO_READ' | 'IN_PROGRESS' | 'DONE', tags: string[] } = () => {

    const urlSearchParams = (new URL(window.location.href)).searchParams;
    let page: 'TO_READ' | 'IN_PROGRESS' | 'DONE' = 'TO_READ';
    switch (urlSearchParams.get('tab')) {
        case 'inprogress': {
            page = 'IN_PROGRESS';
            break;
        }
        case 'done': {
            page = 'DONE';
            break;
        }
        default: { }
    }
    let tags: string[] = [];
    const tagsString = urlSearchParams.get('tags');
    if (typeof tagsString === 'string') {
        tags = tagsString.split(',')
    }
    console.log(urlSearchParams.get('tab'), urlSearchParams.get('tags'));

    return {
        page,
        tags
    }
}