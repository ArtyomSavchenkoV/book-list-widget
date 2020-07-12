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
            <div
                onClick={() => onSelectPage('TO_READ')}
                className={'tab' + (currentPage === 'TO_READ' ? ' selected' : '')}
            >
                {toReadText}
            </div>
            <div
                onClick={() => onSelectPage('IN_PROGRESS')}
                className={'tab' + (currentPage === 'IN_PROGRESS' ? ' selected' : '')}
            >
                {inProgressText}
            </div>
            <div
                onClick={() => onSelectPage('DONE')}
                className={'tab' + (currentPage === 'DONE' ? ' selected' : '')}
            >
                {doneText}
            </div>
        </div>
    )
}


export default Layout;