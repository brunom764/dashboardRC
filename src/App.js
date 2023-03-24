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

function App() {
  return (
    <>
      <Header/>
      <Banner/>
      <About/>
      <Field/>
      <Categories/>
      <TV/>
      <NewsLetter/>
      <Partness/>
      <Footer/>
    </>
  );
}

export default App;
