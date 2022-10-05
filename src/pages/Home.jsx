import React from 'react';
import Discounted from '../components/Discounted';
import Explore from '../components/Explore';
import Featured from '../components/Featured';
import Highlight from '../components/Highlight';
import Landing from '../components/Landing';

const Home = () => {
  return (
    <>
      <Landing />
      <Highlight />
      <Featured />
      <Discounted />
      <Explore /> 
    </>
  );
}

export default Home;
