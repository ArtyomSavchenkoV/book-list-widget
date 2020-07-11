import React from 'react';
import ErrorBoundary from '../common/error-boundary';


const withErrorBoundary = (Component) => {
    return (props) => {
        return (
            <ErrorBoundary>
                <Component
                    {...props}
                />
            </ErrorBoundary>
        );
    }
};


export default withErrorBoundary;