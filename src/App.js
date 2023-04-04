import React, { useState, useEffect } from 'react';
import './App.css';
import About from './compoments/about';
import Banner from './compoments/banner';
import Categories from './compoments/categories';
import Field from './compoments/field';
import Footer from './compoments/footer';
import Header from './compoments/header';
import NewsLetter from './compoments/newsletter';
import TV from './compoments/tv';
import Partness from './compoments/partness';
import LoadingScreen from './compoments/loading';
import Team from './compoments/team';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

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
      <Categories/>
      <Team/>
      <TV/>
      <NewsLetter/>
      <Partness/>
      <Footer/>
    </>
    )}
  </>);
}

export default App;
