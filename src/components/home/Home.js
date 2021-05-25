import React from 'react';
import Feed from '../feed/Feed';

import './home.scss';

const Home = () => {
  return (
    <section id="home-component" className="container mainContainer">
      <Feed />
    </section>
  );
};

export default Home;
