import './App.css';

import Footer from './components/Footer';
import Header from './components/Header'
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Problem from './components/Problem';
import Solution from './components/Solution';


function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Problem/>
      <Solution/>
      <HowItWorks/>
      <Footer/>
    </div>
  );
}

export default App;
