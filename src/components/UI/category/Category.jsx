import React from 'react';
import { Container,Col,Row } from 'reactstrap';
import '../../../styles/category.css';

import category01 from '../../../assets/images/category-01.png';
import category02 from '../../../assets/images/category-02.png';
import category03 from '../../../assets/images/category-03.png';
import category04 from '../../../assets/images/category-04.png';

const categoryData = [
    {
        display:'Fastfood',
        imgUrl: category01
    },
    {
        display:'Pizza',
        imgUrl: category02
    },
    {
        display:'Asian Foods',
        imgUrl: category03
    },
    {
        display:'Row Meat',
        imgUrl: category04
    },
]

export const Category = () => {
    return (
       <Container>
        <Row>
            {categoryData.map((item,index)=>(
                // console.log(item.display);
                <Col lg='3' md='4'>
                    <div className="category_item d-flex align-items-center gap-3">
                        <div className="category_img">
                            <img src={item.imgUrl} alt="category_item" />
                        </div>
                        <h6>{item.display}</h6>
                    </div>
                </Col>
            ))}
        </Row>
       </Container>
    );
};

// export default category;