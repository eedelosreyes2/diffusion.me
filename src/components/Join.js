import React, { Component } from 'react';

export default class Join extends Component {
	render() {
		return (
			<div className="join-container" ref={this.props.setRef}>
				<h2>Get started with diffusion</h2>
				<div style={{ paddingBottom: '20px' }}>
					<input placeholder="you@email.com"></input>
					<button className="join-button-white" alt="Join">
						Join
					</button>
				</div>
				<h4>
					By submitting your email, you will be put on our exclusive
					waitlist.
				</h4>
			</div>
		);
	}
}
