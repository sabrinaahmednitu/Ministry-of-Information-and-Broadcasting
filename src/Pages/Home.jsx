import React from 'react';
import MainGuest from '../Components/Home/MainGuest';
import AllCards from '../Components/Home/AllCards';
import InternalEService from '../Components/Home/InternalEService';
import ESeba from '../Components/Home/ESeba';
import HotLine from '../Components/Home/HotLine';
import PublicOpinion from '../Components/Home/PublicOpinion';

const Home = () => {
  return (
    <div>
      <MainGuest></MainGuest>
      <AllCards></AllCards>
      <HotLine></HotLine>
      <InternalEService></InternalEService>
      <PublicOpinion></PublicOpinion>
      <ESeba></ESeba>
    </div>
  );
};

export default Home;
