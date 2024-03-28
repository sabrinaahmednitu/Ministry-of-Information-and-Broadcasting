import React from 'react';
import Banner from '../Components/Home/Banner/Banner';
import MostRental from '../Components/Home/MostRental/MostRental';
import PerfectPlace from '../Components/Home/PerfectPlace/PerfectPlace';
import RecentRent from '../Components/Home/RecentRent/RecentRent';
import RentingEasy from '../Components/Home/RentingEasy/RentingEasy';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <RecentRent></RecentRent>
            <MostRental></MostRental>
            <PerfectPlace></PerfectPlace>
            <RentingEasy></RentingEasy>
        </div>
    );
};

export default Home;