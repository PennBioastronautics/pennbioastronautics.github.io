import React from 'react';
import StarField from './components/StarField';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Research from './components/Research';
import Blog from './components/Blog';
import Resources from './components/Resources';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* Animated Star Field Background */}
      <StarField />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Team />
        <Research />
        <Blog />
        <Resources />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App; 