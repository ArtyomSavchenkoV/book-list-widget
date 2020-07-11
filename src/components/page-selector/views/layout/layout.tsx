import React from 'react';

import './layout.scss';


type TProps = {
    onSelectPage: (page: 'TO_READ' | 'IN_PROGRESS' | 'DONE') => void,
    toReadText: string,
    inProgressText: string,
    doneText: string,
    booksToReadCount: number,
    booksInProgressCount: number,
    booksDoneCount: number,
    currentPage: 'TO_READ' | 'IN_PROGRESS' | 'DONE'
}
const Layout: React.FC<TProps> = ({
    onSelectPage,
    toReadText,
    inProgressText,
    doneText,
    booksToReadCount,
    booksInProgressCount,
    booksDoneCount,
    currentPage
}) => {

    return (
        <div className="page-selector">
            <button
                onClick={() => onSelectPage('TO_READ')}
                className={'' + (currentPage === 'TO_READ' ? ' selected' : '')}
            >
                {`${toReadText} (${booksToReadCount})`}
            </button>
            <button
                onClick={() => onSelectPage('IN_PROGRESS')}
                className={'' + (currentPage === 'IN_PROGRESS' ? ' selected' : '')}
            >
                {`${inProgressText} (${booksInProgressCount})`}
            </button>
            <button
                onClick={() => onSelectPage('DONE')}
                className={'' + (currentPage === 'DONE' ? ' selected' : '')}
            >
                {`${doneText} (${booksDoneCount})`}
            </button>
        </div>
    )
}


export default Layout;