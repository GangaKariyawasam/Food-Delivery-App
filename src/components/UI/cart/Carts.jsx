import React from 'react';
import { ListGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Cartitems } from './Cartitems';

import '../../../styles/shopping-cart.css';

export const Carts = () => {
    return (
        <div className="cart_container">
             <div className="cart_close">
                <span className='cart_close-icon'><i className="d-flex align-items-center justify-content-center ri-close-fill"></i></span>
            </div>
        <div className='cart_item-container'>
            <ListGroup className="cart">
                <div className="cart_item-list"> 
                <Cartitems/>
                <Cartitems/>
                <Cartitems/>
                <Cartitems/>
                </div>
            </ListGroup>
        </div>

        <div className="cart_bottom">
                <h6>Subtotal amount: <span>$123</span></h6>
                <div className='d-flex justify-content-between cart_btn'>
                    <button className=''><Link to='/checkout'>Checkout</Link></button>
                    <button className=''><Link to='/cart'>Show All</Link></button>
                </div>
               
            </div> 
    </div>
    );
};

// export default Carts;