import { Component } from 'react';
import './App.css';
import Features from './components/Features';

import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Hero />
				<Features />
				<Footer />
			</div>
		);
	}
}

export default App;
