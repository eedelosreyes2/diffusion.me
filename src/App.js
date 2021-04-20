import { Component, createRef } from 'react';
import './App.css';
import Features from './components/Features';

import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';

class App extends Component {
	constructor(props) {
		super(props);
		this.heroRef = createRef();
		this.featuresRef = createRef();
	}

	focusHero = () =>
		this.heroRef.current.scrollIntoView({ behavior: 'smooth' });
	focusFeatures = () =>
		this.featuresRef.current.scrollIntoView({ behavior: 'smooth' });

	render() {
		return (
			<div className="App">
				<Header
					focusHero={this.focusHero}
					focusFeatures={this.focusFeatures}
				/>
				<Hero setRef={this.heroRef} />
				<Features setRef={this.featuresRef} />
				<Footer />
			</div>
		);
	}
}

export default App;
