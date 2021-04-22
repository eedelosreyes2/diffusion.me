import React, { Component } from 'react';

export default class Hero extends Component {
	render() {
		return (
			<div ref={this.props.setRef}>
				<div className="hero-container">
					<div style={{ paddingRight: '10px' }}>
						<h1 className="hero-text">
							A fun way to find new perspectives and build your
							brand.
						</h1>
						<h4
							className="hero-text"
							style={{ paddingBottom: '50px' }}
						>
							Curate your favorite content from the web and
							organize it as pinboards that you can offer to your
							community.
						</h4>
						<button
							className="diffuse-button"
							onClick={this.props.focusJoin}
						>
							Diffuse
						</button>
					</div>
					<div>
						<img className="hero-image" alt=""></img>
					</div>
				</div>
			</div>
		);
	}
}
