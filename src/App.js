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
import Footer from './components/Footer';
import Rights from './components/Rights';

const App = () => {
  return (
    <div className="flex flex-col w-[1440px] font-['open-sans']">
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
      <Footer />
      <Rights />
    </div>
  );
};

export default App;
