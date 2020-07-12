import React from 'react';

import './layout.scss';


type TProps = {
    children: JSX.Element | JSX.Element[]
}
const Layout: React.FC<TProps> = ({
    children
}) => {

    return (
        <div className="books-list">
            {children}
        </div>
    )
}


export default Layout;