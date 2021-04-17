import React, { Component } from 'react'

export default class Header extends Component {
    focusProblem = () => {
        console.log("pepe");
        console.log(this.props.probleRef);
    }

    render() {
        return (
            <div className="header">
                <h2 className="logo">diffusion</h2>
                <div className="nav">
                    <h4 className="nav-item" onClick={this.focusProblem}>Problem</h4>
                    <h4 className="nav-item" href="">Solution</h4>
                    <h4 className="nav-item" href="">How it Works</h4>
                </div>
            </div>
        )
    }
}
