import React from 'react';

import './layout.scss';


type TProps = {
    onSelectPage: (page: 'TO_READ' | 'IN_PROGRESS' | 'DONE') => void,
    toReadText: string,
    inProgressText: string,
    doneText: string,
    currentPage: 'TO_READ' | 'IN_PROGRESS' | 'DONE'
}
const Layout: React.FC<TProps> = ({
    onSelectPage,
    toReadText,
    inProgressText,
    doneText,
    currentPage
}) => {

    return (
        <div className="page-selector">
            <button
                onClick={() => onSelectPage('TO_READ')}
                className={'' + (currentPage === 'TO_READ' ? ' selected' : '')}
            >
                {toReadText}
            </button>
            <button
                onClick={() => onSelectPage('IN_PROGRESS')}
                className={'' + (currentPage === 'IN_PROGRESS' ? ' selected' : '')}
            >
                {inProgressText}
            </button>
            <button
                onClick={() => onSelectPage('DONE')}
                className={'' + (currentPage === 'DONE' ? ' selected' : '')}
            >
                {doneText}
            </button>
        </div>
    )
}


export default Layout;