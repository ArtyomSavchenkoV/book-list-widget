import React from 'react';

import './layout.scss';


type TProps = {
    header: JSX.Element,
    children: JSX.Element | JSX.Element[]
}
const Layout: React.FC<TProps> = ({
    header,
    children
}) => {

    return (
        <div className="landing">
            <div className="landing-header">
                {header}
            </div>
            <div className="landing-body">
                {children}
            </div>
        </div>
    )
}


export default Layout;