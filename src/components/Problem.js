import React, { Component, createRef } from 'react'

export default class Problem extends Component {
    constructor(props) {
        super(props);
        this.problemRef = createRef();
        this.focusProblemRef = this.focusProblemRef.bind(this);
    }

    focusProblemRef() {
        this.problemRef.current.focus();
    }

    render() {
        return (
            <div className="problem-container" problemRef={this.problemRef}>
                This is the Problem page
            </div>
        )
    }
}
