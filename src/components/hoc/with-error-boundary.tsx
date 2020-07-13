import React from 'react';
import ErrorBoundary from '../common/error-boundary';


type TType = <T>(arg0: React.FC<T | object>) => React.FC<T>;
const withErrorBoundary:TType = (Component) => {
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