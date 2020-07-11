import React from 'react';

import './layout.scss';

type props = {
    title: string
}
const Layout :React.FC<props> = ({
    title
}) => {

    return (
        <div className="app">
            {title}
        </div>
    );
};

export default Layout;