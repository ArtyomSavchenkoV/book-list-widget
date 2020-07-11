import React, { Component } from 'react';
import ErrorBoundaryIndicator from './views/error-boundary-indicator';

export default class extends Component {
    constructor() {
        super();

        this.state = {
            error: false,
            errorString: null,
            errorInfo: null
        }
    }

	/**
	 * Error catching.
	 */
    componentDidCatch(errorString, errorInfo) {
        
        this.setState({error: true, errorString: errorString.toString()})
    }

	/**
	 * Display an error or flawless application content.
	 */
    render(){
        if (this.state.error) return <ErrorBoundaryIndicator error={this.state.errorString}/>;
        return this.props.children;
    }
}
