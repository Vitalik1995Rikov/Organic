import React from 'react';
import Person from './components/Person';

const App = () => {
  return (
    <div className="flex border-2 border-slate-500">
      <Person />
      <Person />
      <Person />
    </div>
  );
};

export default App;
