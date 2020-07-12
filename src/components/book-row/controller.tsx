import React from 'react'
import { connect } from 'react-redux';
import withErrorBoundary from '../hoc/with-error-boundary';
import withLocalization, { TWithLocalization } from '../hoc/with-localization';
import compose from '../../utils/compose';

import { IConnect } from '../../reducers';

import { changeBookStatus } from '../../actions';

import Layout from './views/layout';
import ChangeStatusButton from './views/change-status-button';
import Tags from '../common/tags';

type TProps = {
    currentPage: 'TO_READ' | 'IN_PROGRESS' | 'DONE',
    book: {
        id: string,
        author: string,
        title: string,
        description: string,
        tags: string[]
    },
}
const Controller: React.FC<TProps & TWithLocalization & IConnect<typeof storeEnchancer>> = ({
    currentPage,
    book,
    changeBookStatus,
    localize
}) => {
    const changeStatusButton = (
        <ChangeStatusButton
            bookId={book.id}
            currentPage={currentPage}
            changeBookStatus={changeBookStatus}
            startReadingText={localize('book.start_reading')}
            finishReadingText={localize('book.finish_reading')}
            returnToInReadText={localize('book.return_to_in_read')}
        />
    )
    return (
        <Layout 
            changeStatusButton={changeStatusButton}
            id={book.id}
            author={book.author}
            title={book.title}
            description={book.description}
            tags={<Tags tags={book.tags} />}
        />
    )
}


const mapDispatchToProps = {
    changeBookStatus
}
const storeEnchancer = connect(()=>{return{}}, mapDispatchToProps);

export default compose(
    withErrorBoundary,
    withLocalization,
    storeEnchancer
)(Controller) as React.FC<TProps>;