import React from 'react';
import Header from './components/Header';
import Welcome from './components/Welcome';

const App = () => {
  return (
    <div className="flex font-ro">
      <Header />
      <Welcome />
    </div>
  );
};

export default App;
