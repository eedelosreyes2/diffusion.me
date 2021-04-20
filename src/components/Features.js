import { Component } from 'react';

export default class Features extends Component {
	render() {
		return (
			<div ref={this.props.setRef} className="features-container">
				<div className="feature">
					<div className="features-image-div">
						<img className="features-image" alt=""></img>
					</div>
					<div className="features-div">
						{/* <div className="divider" /> */}
						<h3>Collect your content</h3>
						<h4>
							Your favorite content lives across different places
							of the web like blogs, tweets, vidoes, posts, and
							podcasts.
						</h4>
						<h4>
							Instead of bookmarking for future reference -you can
							use our google chrome extension to drag n drop your
							content to store on your dashboard.
						</h4>
						<br />
						<h3>Organize your content</h3>
						<h4>
							By using our tool- you can set-up your content to
							create magic later.
						</h4>
						<h4>
							When you find your content you can add descriptions,
							give your quick thoughts, add titles, and curate
							based on your tastes.
						</h4>
					</div>
				</div>

				<div className="feature">
					<div className="features-div">
						<h3>
							Express your digitial identity & give your boards
							life
						</h3>
						<h4>
							Once you’ve transfer your content, we make it easy
							for you to express yourself with our dynamic board
							creator.
						</h4>
						<h4>
							When you use our tool- you can create a story on
							your board based full on your personal taste and add
							notes to give it life.
						</h4>
						<br />
						<h3>Share your culture</h3>
						<h4>
							Once you’re done- you can promote your boards all
							over social media with one-click.
						</h4>
						<h4>
							You can offer your boards to your ditial community
							to explore for free or as exclusive content that
							they must purchase to unlock.
						</h4>
					</div>
					<div className="features-image-div">
						<img className="features-image" alt=""></img>
					</div>
				</div>
			</div>
		);
	}
}
