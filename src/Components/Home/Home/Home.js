import React from 'react';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';
import InvestmentRevenue from '../InvestmentRevenue/InvestmentRevenue';
import ClothingType from '../ClothingType/ClothingType';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventory></Inventory>
            <InvestmentRevenue></InvestmentRevenue>
            <ClothingType></ClothingType>
        </div>
    );
};

export default Home;