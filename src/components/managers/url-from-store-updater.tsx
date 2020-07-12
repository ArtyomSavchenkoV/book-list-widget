import React from 'react';
import { connect } from 'react-redux';
import { TStore, IConnect } from '../../reducers';

type TProps = {

}
const UrlFromStoreUpdater: React.FC<TProps & IConnect<typeof storeEnchancer>> = ({
    tags,
    page
}) => {   
    const currentPageAndTags = getPageAndTags();
    
    if (currentPageAndTags.page !== page || !compareArrys(tags, currentPageAndTags.tags)) {
        const url = new URL(window.location.href); 
    
        const tagsString = tags.reduce<string>((result, el, index) => {
            return result + (index > 0 ? ',' : '') + el;
        }, '');
    
        if (tagsString.length > 0) {
            url.searchParams.set('tags', tagsString)
        } else {
            url.searchParams.delete('tags');
        }
        switch (page) {
            case 'IN_PROGRESS': {
                url.searchParams.set('tab', 'inprogress');
                break;
            }
            case 'DONE': {
                url.searchParams.set('tab', 'done');
                break;
            }
            default: {
                url.searchParams.delete('tab');
                break;
            }
        }
        
        window.history.pushState({}, '', url.href)
    }

    return null
}


const mapStoreToProps = ({ booksStore, applicationStateStore }: TStore) => {
    return {
        tags: booksStore.selectedFilterTags,
        page: applicationStateStore.currentPage
    }
}
const storeEnchancer = connect(mapStoreToProps);
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

    return {
        page,
        tags
    }
}


const compareArrys: (arr1: any[], arr2: any[]) => boolean = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false
    }

    for (let val of arr1) {
        if (!arr2.includes(val)) {
            return false
        }
    }

    for (let val of arr2) {
        if (!arr1.includes(val)) {
            return false
        }
    }

    return true;
}