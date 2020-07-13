import React from 'react';
import { connect } from 'react-redux';
import { TStore, IConnect } from '../../reducers';

type TProps = {

}
const BooksInProgressStorageUpdater: React.FC<TProps & IConnect<typeof storeEnchancer>> = ({
    booksInProgress,
    dataStatus
}) => {
    if (dataStatus === 'READY') {
        const list = booksInProgress.reduce<string>((prevResult, book, index) => {
            return prevResult + (index > 0 ? ',' : '') + book.id
        }, '');
        window.localStorage.setItem('inProgress', list)
    }
    return null
}


const mapStoreToProps = ({ booksStore }: TStore) => {
    return {
        booksInProgress: booksStore.booksInProgress,
        dataStatus: booksStore.dataStatus
    }
}
const storeEnchancer = connect(mapStoreToProps);
export default storeEnchancer(BooksInProgressStorageUpdater) as React.FC<TProps>;