import React from 'react';

import './layout.scss';

type props = {
    title: string,
    children: JSX.Element | null
}
const Layout :React.FC<props> = ({
    title,
    children
}) => {

    return (
        <div className="app">
            {title}
            {children}
        </div>
    );
};

export default Layout;