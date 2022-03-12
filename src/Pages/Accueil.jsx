import React from 'react';
import Slider from '../Components/Slider/Slider'
import Categories from '../Components/Categories/Categories'
import Products from '../Components/Produits/Products'
import Newsletter from '../Components/Newsletter/Newsletter'
import Footer from '../Components/Footer/Footer'

const Accueil = () => {
    return (
        <div>
            <Slider />
            <Categories />
            <Products />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default Accueil;