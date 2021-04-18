import React, { Component } from 'react'

export default class Hero extends Component {
    render() {
        return (
            <div>
                <div className="hero-container">
                    <div className="hero-div">
                        <h1>A fun way to find new perspectives and build your brand.</h1>
                        <h4 style={{paddingBottom: "50px"}}> Curate your favorite content from the web and organize it as 
                            pinboards that you can offer to your community.</h4>
                        <button className="diffuse-button">Diffuse</button>
                    </div>
                    <div className="hero-image-div"><img className="hero-image" alt=""></img></div>
                </div>
            </div>
        )
    }
}
