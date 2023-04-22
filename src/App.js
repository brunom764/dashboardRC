import React, { useState, useEffect } from 'react';
import './App.css';
import About from './components/about';
import Banner from './components/banner';
import Categories from './components/categories';
import Field from './components/field';
import Footer from './components/footer';
import Header from './components/header';
import NewsLetter from './components/newsletter';
import TV from './components/tv';
import Partness from './components/partness';
import LoadingScreen from './components/loading';
import Team from './components/team';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
    <>
      <Header/>
      <Banner/>
      <About/>
      <Field/>
      <NewsLetter/>
      <Categories/>
      <TV/>
      <Team/>
      <Partness/>
      <Footer/>
    </>
    )}
  </>);
}

export default App;
