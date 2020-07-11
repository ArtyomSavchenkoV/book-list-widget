import React from 'react';

import './notice-panel.scss';


type TProps = {
    children: string | JSX.Element
}
const NoticePanel: React.FC<TProps> = ({
    children
}) => {
    return (
        <div className="notice-panel">
            {children}
        </div>
    )
}


export default NoticePanel;