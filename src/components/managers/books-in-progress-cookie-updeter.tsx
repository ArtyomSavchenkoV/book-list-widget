import React from 'react';
import { connect } from 'react-redux';
import { TStore, IConnect } from '../../reducers';
import { useCookies } from 'react-cookie';

type TProps = {

}
const BooksInProgressCookieUpdater: React.FC<TProps & IConnect<typeof storeEnchancer>> = ({
    booksInProgress,
    dataStatus
}) => {
    const setCookie = useCookies(['inProgress'])[1];
    if (dataStatus === 'READY') {
        const list = booksInProgress.reduce<string>((prevResult, book, index) => {
            return prevResult + (index > 0 ? ',' : '') + book.id
        }, '');
        setCookie('inProgress', list, { secure: true })
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
export default storeEnchancer(BooksInProgressCookieUpdater) as React.FC<TProps>;