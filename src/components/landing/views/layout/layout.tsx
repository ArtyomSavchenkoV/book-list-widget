import React from 'react';

import './layout.scss';


type TProps = {
    header: JSX.Element,
    body: JSX.Element
}
const Layout: React.FC<TProps> = ({
    header,
    body
}) => {

    return (
        <div className="landing">
            <div className="landing-header">
                {header}
            </div>
            <div className="landing-body">
                {body}
            </div>
        </div>
    )
}


export default Layout;