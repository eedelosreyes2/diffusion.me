import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <h2 className="logo">diffusion</h2>
                <div className="nav">
                    <h3 className="nav-item" href="">Problem</h3>
                    <h3 className="nav-item" href="">Solution</h3>
                    <h3 className="nav-item" href="">How it Works</h3>
                </div>
            </div>
        )
    }
}
