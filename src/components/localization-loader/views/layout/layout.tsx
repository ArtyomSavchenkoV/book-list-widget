import React from 'react';

import Spinner from '../../../common/spinner';

import './layout.scss';


type TProps = {
};
const Layout: React.FC<TProps> = ({
}) => {

    return (
        <div className="localization-loader">
            <div className="localization-loader-spinner">
                <Spinner />
            </div>
        </div>
    )
}


export default Layout;