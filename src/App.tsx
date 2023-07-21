import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { ExploreTopBooks } from './layouts/NavbarAndFooter/ExploreTopBooks';
import { Carousel } from './layouts/NavbarAndFooter/Carousel';

function App() {
  return (
    <>
      <Navbar/>
      <ExploreTopBooks/>
      <Carousel/>
    </>
  );
}

export default App;
