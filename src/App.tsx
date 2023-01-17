import React from 'react';
import './App.scss';

import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Services } from './components/Services/Services';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
