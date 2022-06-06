import Header from './components/headerFooter/header'
import React from 'react'
import Home from './pages/home';
import { Route, Routes} from 'react-router-dom'
import About from './pages/about';
import Reviews from './pages/review';
import Contact from './pages/contact';
import Services from './pages/services';
import Footer from './components/headerFooter/footer';
import Topbar from './components/headerFooter/topbar';

function App() {
  return (
    <div className='overflow-x-auto h-screen'>
        <Topbar></Topbar>
        <Header ></Header>

        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/reviews' element={<Reviews />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/services' element={<Services />}/>
        </Routes>
        <footer>
          <Footer/>
        </footer>
    </div>
    
  );
}

export default App;
