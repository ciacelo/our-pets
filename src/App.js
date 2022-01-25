import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Login from './components/login';
import { UseStorage } from './components/UserContext';
import User from './components/user';
import ProtectedRouter from './components/helpers/ProtectedRouter';
import Photo from './components/photo'
import UserProfile from './components/user/userProfile';
import NotFound from './components/NotFound';
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
            <Route path="login/*" element={<Login />} />
            <Route path="conta/*" element={
              <ProtectedRouter>
                <User />
              </ProtectedRouter>
            } />
            <Route path="foto/:id" element={<Photo />} />
            <Route path="perfil/:user" element={<UserProfile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </UseStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
