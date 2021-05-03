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
							Curate both your favorite web content and personal
							creations as pinboards to share.
						</h4>
						<button
							className="diffuse-button"
							onClick={this.props.focusJoin}
						>
							Join the waitlist
						</button>
					</div>
					{/* <div>
						<img className="hero-image" alt=""></img>
					</div> */}
				</div>
			</div>
		);
	}
}
