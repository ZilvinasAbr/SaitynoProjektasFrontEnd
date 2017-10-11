import React from 'react';

import Header from '../header/Header';
import Footer from '../footer/Footer';

import mockUsers from '../mockData/mockUsers';

const Library = () => (
  <div>
    <Header
      userName={mockUsers[0].userName}
    />
    <Footer/>
  </div>
);

export default Library;
