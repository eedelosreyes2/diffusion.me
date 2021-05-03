import React, { Component } from 'react';

export default class Construction extends Component {
	state = {
		styling: {
			backgroundColor: 'lightblue',
			borderRadius: '15px',
			color: 'white',
			cursor: 'pointer',
			display: 'flex',
			flexDirection: 'column',
			height: '40px',
			justifyContent: 'center',
			position: 'absolute',
			top: '70px',
			width: '80vw',
			zIndex: '1000',
		},
	};

	handleClose = () => {
		this.setState({ styling: { display: 'none' } });
	};

	render() {
		return (
			<div onClick={this.handleClose} style={this.state.styling}>
				Note: This website is still under construction and will be done
				soon!
			</div>
		);
	}
}
