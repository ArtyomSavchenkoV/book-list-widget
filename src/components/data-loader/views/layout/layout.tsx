import React from 'react';

import './layout.scss';


type TProps = {
    dictionaryStatus: string,
    labelText: String
};
const Layout: React.FC<TProps> = ({
    dictionaryStatus
}) => {
    const label = (
        dictionaryStatus === 'READY'
        || dictionaryStatus === 'FAILURE'
    ) ? (
        <div className="label">

        </div>
    ) : null;

    return (
        <div className="data-loader">
            <div className="data-loader-spinner">

                {label}
            </div>
        </div>
    )
}


export default Layout;