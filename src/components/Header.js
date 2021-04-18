import React, { Component } from 'react'

export default class Header extends Component {
    focusProblem = () => {
        console.log("pepe");
        console.log(this.props.probleRef);
    }

    render() {
        return (
            <div className="header">
                <h3 className="logo">diffusion</h3>
                <div className="nav">
                    <h4 className="nav-item" onClick={this.focusProblem}>Features</h4>
                    <button className="nav-item join-button">Join</button>
                </div>
            </div>
        )
    }
}
