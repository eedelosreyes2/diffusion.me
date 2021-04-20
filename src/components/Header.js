import React, { Component } from 'react';

export default class Header extends Component {
	render() {
		return (
			<div className="header">
				<h3 className="logo" onClick={this.props.focusHero}>
					diffusion
				</h3>
				<div className="nav">
					<h4 className="nav-item" onClick={this.props.focusFeatures}>
						Features
					</h4>
					<button className="nav-item join-button">Join</button>
				</div>
			</div>
		);
	}
}
