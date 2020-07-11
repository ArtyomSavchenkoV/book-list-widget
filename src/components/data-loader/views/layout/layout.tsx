import React from 'react';

import Spinner from '../../../common/spinner';

import './layout.scss';


type TProps = {
    dictionaryStatus: string,
    labelText: string,
    warningText: string
};
const Layout: React.FC<TProps> = ({
    dictionaryStatus,
    labelText,
    warningText
}) => {

    const label = (
        dictionaryStatus === 'READY'
        || dictionaryStatus === 'FAILURE'
    ) ? (
        <div className="label">
            {labelText}
        </div>
    ) : null;

    const warning = warningText !== '' ? (
        <div className="warning">
            {warningText}
        </div>
    ) : null;

    return (
        <div className="data-loader">
            {warning}
            <div className="data-loader-spinner">
                <Spinner />
                {label}
            </div>
        </div>
    )
}


export default Layout;