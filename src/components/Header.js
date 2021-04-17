import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <h2 className="logo">diffusion</h2>
                <div className="nav">
                    <h4 className="nav-item" onClick={{}}>Problem</h4>
                    <h4 className="nav-item" href="">Solution</h4>
                    <h4 className="nav-item" href="">How it Works</h4>
                </div>
            </div>
        )
    }
}
