import React from 'react';
import { useParams } from 'react-router-dom';
import Feed from '../../feed/Feed';

const UserProfile = () => {
  const { user } = useParams()

  return (
    <section className='container mainContainer'>
      <h1>{user}</h1>
      <Feed user={user} />
    </section>
  );
};

export default UserProfile;
