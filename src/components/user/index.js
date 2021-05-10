import React from 'react';
import './user.scss';
import { Route, Routes } from 'react-router';
import Feed from '../feed/Feed';
import UserHeader from './userHeader/UserHeader';
import UserPhotoPost from './userPhotoPost/UserPhotoPost';
import UserStats from './userStats/UserStats';

const User = () => {
  return (
    <section id="user-container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
      </Routes>
    </section>
  );
};

export default User;
