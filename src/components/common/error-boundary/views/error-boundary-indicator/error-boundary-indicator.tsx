import React from 'react';

import './error-boundary-indicator.css';


type TProps = {
    error: string    
}
const ErrorBoundaryIndicator: React.FC<TProps> = ({error}) => {
    console.log(error);
    return (
        <div className="error-boundary-indicator">
            <h3>Fatal Error.</h3>
            {error}
        </div>
    )
};


export default ErrorBoundaryIndicator;
