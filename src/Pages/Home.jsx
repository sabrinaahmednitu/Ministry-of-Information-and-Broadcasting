import React from 'react';
import MainGuest from '../Components/Home/MainGuest';
import AllCards from '../Components/Home/AllCards';
import InternalEService from '../Components/Home/InternalEService';
import ESeba from '../Components/Home/ESeba';
import HotLine from '../Components/Home/HotLine';

const Home = () => {
  return (
    <div>
      <MainGuest></MainGuest>
      <AllCards></AllCards>
      <HotLine></HotLine>
      <InternalEService></InternalEService>
      <ESeba></ESeba>
    </div>
  );
};

export default Home;
