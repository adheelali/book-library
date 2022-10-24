import React, { useEffect } from 'react';
import Discounted from '../components/Discounted';
import Explore from '../components/Explore';
import Featured from '../components/Featured';
import Highlight from '../components/Highlight';
import Landing from '../components/Landing';

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

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
