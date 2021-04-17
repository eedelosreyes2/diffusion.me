import React, { Component } from 'react'

export default class Hero extends Component {
    render() {
        return (
            <div>
                <div className="hero-container"> 
                    <h1 style={{paddingBottom: "72px"}}>Be the tour guide to somebody's content discovery.</h1>
                    <h3>Cultural diffusion (n)</h3>
                    <h4>The spread of one culture's practices, beliefs, and/or items like food, music, or tools.</h4>
                    <div className="join-container">
                        <input type="text" placeholder="you@email.com" onFocus="this.placeholder = ''"></input>
                        <button>Join</button>
                    </div>
                </div>
            </div>
        )
    }
}
