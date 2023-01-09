 import React from 'react';
 import { ListGroupItem } from 'reactstrap';
 import productImg from '../../../assets/images/product_01.1.jpg'; 

 import '../../../styles/cart-item.css';
 
 export const Cartitems = () => {
    return (
        <ListGroupItem className='border-10 cart_item'>
            <div className="cart_item-info w-100 d-flex gap-2">
                <div className='cart_product-img'>
                    <img className='d-flex align-items-center justify-content-center' src={productImg} alt="product-img" />
                </div>
                 

                <div className="cart_product_info d-flex align-items-center justify-content-between w-100">
                        <div>
                            <h6 className='cart_product-title'>Burger</h6>
                            <p className='cart_product-price d-flex gap-2'>2 x <span>$24.00</span></p>
                        </div> 
                        <div className='increase_decrease-btn d-flex align-items-center gap-3'>
                            <span className='increase_btn'><i className="ri-add-line"></i></span>
                            <span className='quantity'>2</span>
                            <span className='decrease_btn'><i className="ri-subtract-line"></i></span>
                        </div>
                </div>
                    <span className='delete_btn'><i className="ri-close-line"></i></span>
               
            </div>
        </ListGroupItem>
    );
 };
 
//  export default Cartitems;
 