import React from 'react';

import './layout.scss';

type props = {
    children: JSX.Element | null
}
const Layout :React.FC<props> = ({
    children
}) => {

    return (
        <div className="app">
            {children}
        </div>
    );
};

export default Layout;