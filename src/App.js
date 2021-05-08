import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Login from './components/login';
import { UseStorage } from './components/UserContext';
// import Login from './pages/login';
// import Register from './pages/register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UseStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
          </Routes>
          <Footer />
        </UseStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
