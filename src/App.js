import { Component } from 'react';
import './App.css';
import Features from './components/Features';

import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';

class App extends Component {
	setRef = (ref) => {
		this.featuresRef = ref;
	};

	focusFeatures = () => console.log(this.setRef);

	render() {
		return (
			<div className="App">
				<button onClick={this.focusFeatures}>features</button>
				<Header />
				<Hero />
				<Features setRef={this.setRef} />
				<Footer />
			</div>
		);
	}
}

export default App;
