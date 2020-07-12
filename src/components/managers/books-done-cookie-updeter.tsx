import React from 'react';
import { connect } from 'react-redux';
import { TStore, IConnect } from '../../reducers';
import { useCookies } from 'react-cookie';

type TProps = {

}
const BooksDoneCookieUpdater: React.FC<TProps & IConnect<typeof storeEnchancer>> = ({
    booksDone,
    dataStatus
}) => {
    const setCookie = useCookies(['done'])[1];
    if (dataStatus === 'READY') {
        const list = booksDone.reduce<string>((prevResult, book, index) => {
            return prevResult + (index > 0 ? ',' : '') + book.id
        }, '');
        setCookie('done', list, { secure: true })
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
export default storeEnchancer(BooksDoneCookieUpdater) as React.FC<TProps>;