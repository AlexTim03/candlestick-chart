import React from 'react';
import classes from './App.module.css'
import Header from './components/Header'
import PriceChart from './components/PriceChart';

function App() {
  return (
    <>
      <Header />
      <div className={classes.wrapper}>
        <PriceChart />
      </div>
    </ >
  );
}

export default App;
