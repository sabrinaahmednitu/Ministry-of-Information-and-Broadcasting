import React from 'react';
import Banner from '../Components/Home/Banner/Banner';
import MostRental from '../Components/Home/MostRental/MostRental';
import Port from '../Components/Home/PortImg/Port';
import RecentRent from '../Components/Home/RecentRent/RecentRent';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <Port></Port>
            <RecentRent></RecentRent>
            <MostRental></MostRental>
        </div>
    );
};

export default Home;