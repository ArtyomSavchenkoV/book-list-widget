import React from 'react';

import Spinner from '../../../common/spinner';

import './layout.scss';


type TProps = {
};
const Layout: React.FC<TProps> = () => {

    return (
        <div className="initial-loader">
            <div className="initial-loader-spinner">
                <Spinner />
            </div>
        </div>
    )
}


export default Layout;