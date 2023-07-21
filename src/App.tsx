import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { ExploreTopBooks } from './layouts/NavbarAndFooter/ExploreTopBooks';
import { Carousel } from './layouts/NavbarAndFooter/Carousel';
import { Heros } from './layouts/NavbarAndFooter/Heros';
import { LibraryServices } from './layouts/NavbarAndFooter/LibraryServices';
import { Footer } from './layouts/NavbarAndFooter/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <ExploreTopBooks/>
      <Carousel/>
      <Heros/>
      <LibraryServices/>
      <Footer/>
    </>
  );
}

export default App;
