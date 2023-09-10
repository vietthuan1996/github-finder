import React from 'react';
import UserResult from '../components/users/UserResult';
import UserSearch from '../components/users/UserSearch';

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <UserSearch />
      <UserResult />
    </>
  );
};

export default Home;
