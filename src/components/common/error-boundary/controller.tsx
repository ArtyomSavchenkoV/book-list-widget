import React, { Component, ErrorInfo } from 'react';
import ErrorBoundaryIndicator from './views/error-boundary-indicator';

type TProps = {};
type TState = {
    error: false,
    errorString: null,
    errorInfo: null
} | {
    error: true,
    errorString: string,
    errorInfo: ErrorInfo
}
export default class extends Component<TProps, TState> {
    constructor(props: TProps) {
        super(props);

        this.state = {
            error: false,
            errorString: null,
            errorInfo: null
        }
    }

	/**
	 * Error catching.
	 */
    componentDidCatch(errorString: Error, errorInfo: ErrorInfo) {        
        this.setState({error: true, errorString: errorString.toString(), errorInfo})
    }

	/**
	 * Display an error or flawless application content.
	 */
    render(){
        if (this.state.error) {
            return <ErrorBoundaryIndicator error={this.state.errorString}/>
        };
        return this.props.children;
    }
}
