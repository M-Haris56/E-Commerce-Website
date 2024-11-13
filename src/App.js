import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/footer';
import Home from './pages/Home';
import About from './pages/about';
import Listing from './pages/Listing';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <>
      <BrowserRouter>

        <Header />
        <Routes>
          <Route exact={true} path='/' element={<Home />} />
          <Route exact={true} path='/listing' element={<Listing />} />
          <Route exact={true} path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
