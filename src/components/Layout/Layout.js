import React from 'react';
import {Header} from '../Header/Header';
import {Footer} from '../Footer/Footer';
import {Routers} from '../../routes/Rouers';
import { Cartitems } from '../UI/cart/Cartitems';
import { Carts } from '../UI/cart/Carts';

const Layout = () => {
    return (
        <div>
            <Header/>
            <Carts/>
        <div>
            <Routers/>    
        </div> 
            <Footer/>   
        </div>
    );
};

export default Layout;