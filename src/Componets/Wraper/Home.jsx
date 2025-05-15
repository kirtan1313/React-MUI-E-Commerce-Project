import React from 'react'
import Banner from '../Banner/Banner'
import NewProdct from '../NewProduct/Newrodct';
import Discout from '../Discount/Discout';
import TrendingProduct from '../TrendingProduct/TrendingProduct';
import Shoping from '../Shopping/Shoping';
import PaymentOption from '../PaymentOption/PaymentOption';
import Footer from '../Footer/Footer';

function Home() {
    return (
        <>
            <Banner />
            <NewProdct />
            <Discout />
            <TrendingProduct />
            <Shoping />
            <PaymentOption />
            
        </>
    )
}

export default Home
