import React from 'react';
import Banner from '../Components/Home/Banner/Banner';
import MostRental from '../Components/Home/MostRental/MostRental';
import PerfectPlace from '../Components/Home/PerfectPlace/PerfectPlace';
import RecentRent from '../Components/Home/RecentRent/RecentRent';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <RecentRent></RecentRent>
            <MostRental></MostRental>
            <PerfectPlace></PerfectPlace>
        </div>
    );
};

export default Home;