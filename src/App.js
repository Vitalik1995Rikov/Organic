import React from 'react';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Cards from './components/Cards';
import AboutUs from './components/AboutUs';

const App = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <Welcome />
      <Cards />
      <AboutUs />
    </div>
  );
};

export default App;
