import React from 'react';
import './App.css';
import { BrowserRouter , Route , Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Header from './components/Header';
import Login from './pages/Login/Login';

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
          <Route path = '/home' element = {<Home />} />
          <Route path = '/contact' element = {<Contact />} />
          <Route path = '/about' element = {<About />} />
          <Route path = '/login' element = {<Login />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
