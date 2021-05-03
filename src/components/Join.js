import React, { Component } from 'react';
import ContactForm from './ContactForm';

export default class Join extends Component {
	render() {
		return (
			<div className="join-container" ref={this.props.setRef}>
				<h2>Get started with diffusion</h2>
				<ContactForm />
				<h4>
					By submitting your email, you will be put on our exclusive
					waitlist.
				</h4>
			</div>
		);
	}
}
