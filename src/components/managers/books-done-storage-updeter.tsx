import React from 'react';
import { connect } from 'react-redux';
import { TStore, IConnect } from '../../reducers';

type TProps = {

}
const BooksDoneStorageUpdater: React.FC<TProps & IConnect<typeof storeEnchancer>> = ({
    booksDone,
    dataStatus
}) => {
    if (dataStatus === 'READY') {
        const list = booksDone.reduce<string>((prevResult, book, index) => {
            return prevResult + (index > 0 ? ',' : '') + book.id
        }, '');
        window.localStorage.setItem('done', list)
    }
    return null
}


const mapStoreToProps = ({ booksStore }: TStore) => {
    return {
        booksDone: booksStore.booksDone,
        dataStatus: booksStore.dataStatus
    }
}
const storeEnchancer = connect(mapStoreToProps);
export default storeEnchancer(BooksDoneStorageUpdater) as React.FC<TProps>;