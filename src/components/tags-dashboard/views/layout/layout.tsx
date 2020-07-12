import React from 'react';

import './layout.scss';


type TProps = {
    tags: JSX.Element[],
    text: string,
    clearButtonText: string,
    onClearButtonClick: () => void
}
const Layout: React.FC<TProps> = ({
    tags,
    text,
    clearButtonText,
    onClearButtonClick
}) => {

    return (
        <div className="tags-dashboard">
            {text}{tags}<span className="clear-button" onClick={onClearButtonClick}>(<u>{clearButtonText}</u>)</span>
        </div>
    )
}


export default Layout;