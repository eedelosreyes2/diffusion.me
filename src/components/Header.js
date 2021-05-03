import React, { Component } from 'react';

export default class Header extends Component {
	render() {
		return (
			<div className="header">
				<div className="header-content">
					<h3 className="logo" onClick={this.props.focusHero}>
						diffusion
					</h3>
					<div className="nav">
						<h4
							className="nav-item"
							onClick={this.props.focusFeatures}
						>
							Features
						</h4>
						<button
							className="nav-item join-button"
							onClick={this.props.focusJoin}
						>
							Join
						</button>
					</div>
				</div>
			</div>
		);
	}
}
