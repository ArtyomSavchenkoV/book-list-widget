import React from 'react';

import './change-status-button.scss';


type TProps = {
    bookId: string,
    currentPage: 'TO_READ' | 'IN_PROGRESS' | 'DONE',
    changeBookStatus: (arg0: {
        id: string,
        currentStatus: 'booksToRead' | 'booksInProgress' | 'booksDone',
        newStatus: 'booksToRead' | 'booksInProgress' | 'booksDone'
    }) => void,

    startReadingText: string
    finishReadingText: string
    returnToInReadText: string
}
const ChangeStatusButton: React.FC<TProps> = ({
    bookId,
    currentPage,
    changeBookStatus,

    startReadingText,
    finishReadingText,
    returnToInReadText
}) => {

    switch (currentPage) {
        case 'TO_READ': {
            return (
                <div
                    className="change-status-button"
                    onClick={() => changeBookStatus({ id: bookId, currentStatus: 'booksToRead', newStatus: 'booksInProgress' })}
                >
                    <span className="title">{startReadingText}</span><span className="icon">→</span>
                </div>
            )
        }
        case 'IN_PROGRESS': {
            return (
                <div
                    className="change-status-button"
                    onClick={() => changeBookStatus({ id: bookId, currentStatus: 'booksInProgress', newStatus: 'booksDone' })}
                >
                    <span className="title">{finishReadingText}</span><span className="icon">→</span>
                </div>
            )
        }
        case 'DONE': {
            return (
                <div
                    className="change-status-button"
                    onClick={() => changeBookStatus({ id: bookId, currentStatus: 'booksDone', newStatus: 'booksToRead' })}
                >
                    <span className="title">{returnToInReadText}</span><span className="icon">↲</span>
                </div>
            )
        }
        default: return null
    }
}


export default ChangeStatusButton;