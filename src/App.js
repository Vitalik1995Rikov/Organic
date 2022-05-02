import React from 'react';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Cards from './components/Cards';
import AboutUs from './components/AboutUs';
import OurProducts from './components/OurProducts';
import WhatCustomerSay from './components/WhatCustomerSay';
import OtherProducts from './components/OtherProducts';
import EcoFriendly from './components/EcoFriendly';
import ThreeCards from './components/ThreeCards';
import News from './components/News';
import Subscribe from './components/Subscribe';

const App = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <Welcome />
      <Cards />
      <AboutUs />
      <OurProducts />
      <WhatCustomerSay />
      <OtherProducts />
      <EcoFriendly />
      <ThreeCards />
      <News />
      <Subscribe />
    </div>
  );
};

export default App;
