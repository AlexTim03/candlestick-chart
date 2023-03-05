import React from 'react';
// import logo from './logo.svg';
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
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
    </ >
  );
}

export default App;
