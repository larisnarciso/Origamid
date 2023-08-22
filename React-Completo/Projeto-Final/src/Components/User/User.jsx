import React from 'react';
import Feed from '../Feed/Feed';
import Head from '../Helper/Head';
import UserHeader from './UserHeader';
import UserStats from './UserStats';
import UserPhotoPost from './UserPhotoPost';
import NotFound from '../NotFound';
import { UserContext } from '../../UserContext';
import { Routes, Route } from 'react-router-dom';

const User = () => {
  const { data } = React.useContext(UserContext);
  return (
    <section className='container'>
      <Head title='Minha Conta' />
      <UserHeader />
      <Routes>
        <Route path='/' element={<Feed user={data.id} />} />
        <Route path='postar' element={<UserPhotoPost />} />
        <Route path='estatisticas' element={<UserStats />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default User;
