import './App.css';
import About from './compoments/about';
import Banner from './compoments/banner';
import Categories from './compoments/categories';
import Field from './compoments/field';
import Footer from './compoments/footer';
import Header from './compoments/header';
import NewsLetter from './compoments/newsletter';
import TV from './compoments/tv';

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
      <Footer/>
    </>
  );
}

export default App;
