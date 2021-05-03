import { Component } from 'react';

class Feature extends Component {
	render() {
		return (
			<div className="feature">
				<div className="features-image-div">
					<img className="features-image" alt=""></img>
				</div>
				<div className="features-div" style={this.props.featureStyle}>
					{/* <div className="divider" /> */}
					<h3>{this.props.header}</h3>
					{this.props.content.map((content, index) => {
						return <h4 key={index}>{content}</h4>;
					})}
				</div>
			</div>
		);
	}
}

export default class Features extends Component {
	state = {
		features: [
			{
				header: 'Collect your content',
				content: [
					'Your favorite content lives across different places on the web - blogs, tweets, videos, posts, and podcasts.',
					'Sure - you can bookmark it for later or send it to your friends. ',
					'Is that all you can do with your content, though?',
				],
			},
			{
				header: 'Nope - you can organize your content',
				content: [
					'Using our tool - you can drag n drop to store on your diffusion dashboard and create pinboards later.',
					'When you find the content, you can add brief descriptions, thoughts and curate it by category.',
					"You'll be able to make magic later.",
				],
			},
			{
				header:
					'Express your digital personality and bring your boards to life',
				content: [
					'When you use our templates - you can give context by adding notes that bring it to life.',
					'We believe that they make it easy to build and discover new boards.',
					'Our templates are a tool for you to be your communities trusted voice and opinion. ',
				],
			},
			{
				header: 'Share and let your content make you money',
				content: [
					'Once done- you’re able to promote your boards all over social media with one click.',
					'You have options - you can have your community pay to unlock as exclusive content, pay per board, or set for free.',
					'The choice is in your hands.',
				],
			},
		],
	};

	render() {
		let i = 0;
		let featureStyle = null;

		return (
			<div ref={this.props.setRef} className="features-container">
				<div className="features-inner">
					{this.state.features.map((feature, index) => {
						i++;

						if (i % 2 === 1) {
							featureStyle = {
								// border: '2px solid var(--blue)',
								// color: 'white',
							};
						} else {
							featureStyle = null;
						}

						return (
							<Feature
								key={index}
								featureStyle={featureStyle}
								header={feature.header}
								content={feature.content}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}
