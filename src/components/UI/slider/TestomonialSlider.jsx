import React from 'react';
import Slider from 'react-slick';

import '../../../styles/slider.css';

import ava01 from '../../../assets/images/ava-1.jpg';
import ava02 from '../../../assets/images/ava-2.jpg';
import ava03 from '../../../assets/images/ava-3.jpg';

export const TestomonialSlider = () => {
    const settings = {
        dots: true,
        autopay:true,
        infinite: true,
        speed: 500,
        autoplayspeed:3000,
        swipetoslide:true,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <Slider {...settings}>
            <div>
                <p className="review_text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minima omnis neque tempore rem voluptate!
                </p>
                <div className='slider_content d-flex align-items-center gap-3'>
                    <img src={ava01} alt="avatar" className='' />
                    <h6>Akesh Dulaba</h6>
                </div>
            </div>
            <div>
            <p className="review_text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minima omnis neque tempore rem voluptate!
                </p>
                <div className='slider_content d-flex align-items-center gap-3'>
                    <img src={ava02} alt="avatar" className='' />
                    <h6>Mahimi dilush</h6>
                </div>
            </div>
            <div>
            <p className="review_text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minima omnis neque tempore rem voluptate!
                </p>
                <div className='slider_content d-flex align-items-center gap-3'>
                    <img src={ava03} alt="avatar" className='' />
                    <h6>Randir Dabare</h6>
                </div>
            </div>
        </Slider>
    );
};

// export default TestomonialSlider;