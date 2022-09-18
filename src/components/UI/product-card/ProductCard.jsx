import React from 'react';
import { Link } from 'react-router-dom';

import '../../../styles/product-card.css';

export const ProductCard = (props) => {
    const  {id,title,image01,price} = props.item
    return (
        <div className='product_item'>
            <div className="product_img">
                <img src={image01} alt="product-img" className='w-50' />
                </div>
                <div className="product_content">
                    <h5><Link to={`/foods/${id}`}>{title}</Link></h5>
                    <div><span className='product_price'>${price}</span></div>
                    <div> <button className='addToCart_btn'>Add to Cart</button></div>
                   
                </div>
        </div>
    );
};

// export default productCard;