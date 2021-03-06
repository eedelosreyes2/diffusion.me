import { Component, createRef } from 'react';
import './App.css';
import Features from './components/Features';

import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Join from './components/Join';

class App extends Component {
	constructor(props) {
		super(props);
		this.heroRef = createRef();
		this.featuresRef = createRef();
		this.joinRef = createRef();
	}

	focusHero = () =>
		this.heroRef.current.scrollIntoView({ behavior: 'smooth' });
	focusFeatures = () =>
		this.featuresRef.current.scrollIntoView({ behavior: 'smooth' });
	focusJoin = () => {
		this.joinRef.current.scrollIntoView({ behavior: 'smooth' });
	};

	render() {
		return (
			<div style={{ borderBottom: '10px solid #00b1d2' }}>
				<div className="App">
					<Header
						focusHero={this.focusHero}
						focusFeatures={this.focusFeatures}
						focusJoin={this.focusJoin}
					/>
					<Hero setRef={this.heroRef} focusJoin={this.focusJoin} />
					<Features setRef={this.featuresRef} />
					<Join setRef={this.joinRef} />
					<Footer />
				</div>
			</div>
		);
	}
}

export default App;
