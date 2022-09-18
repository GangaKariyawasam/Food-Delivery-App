import React from 'react';
import { useEffect, useState } from 'react';
import { Container,Row,Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import '../styles/hero-section.css';
import '../styles/home.css';

import { Helmet } from '../components/Helmet/Helmet.js';
import { Category } from '../components/UI/category/Category.jsx';
import { ProductCard } from '../components/UI/product-card/ProductCard.jsx';

import products from '../assets/fake-data/products.js';

import imageHero from '../assets/images/hero.png';
import featureImg1 from '../assets/images/service-01.png';
import featureImg2 from '../assets/images/service-02.png';
import featureImg3 from '../assets/images/service-03.png';

import foodCategoryImg1 from '../assets/images/hamburger.png';
import foodCategoryImg2 from '../assets/images/pizza.png';
import foodCategoryImg3 from '../assets/images/bread.png';


const featureData = [
    {
        title:'Quick Delivery',
        imgUrl:featureImg1,
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit, Placeat est corporis laudantium saepe sit atque ullam tempora fugit magni!,'
    },
    {
        title:'Super Dine In',
        imgUrl:featureImg2,
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit, Placeat est corporis laudantium saepe sit atque ullam tempora fugit magni!,'
    },
    {
        title:'Easy Pick Up',
        imgUrl:featureImg3,
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit, Placeat est corporis laudantium saepe sit atque ullam tempora fugit magni!,'
    },
]


const Home = () => {

    const [category, setCategory] = useState('ALL');
    const [allProducts, setAllProducts] = useState(products);

    useEffect(()=>{
        if(category === 'ALL'){
            setAllProducts(products)
        }

        if(category === 'BURGER'){
            const filteredProducts = products.filter(item=>item.category === 'Burger')
            setAllProducts(filteredProducts)
        }

        if(category === 'PIZZA'){
            const filteredProducts = products.filter(item=>item.category === 'Pizza')
            setAllProducts(filteredProducts)
        }

        if(category === 'BREAD'){
            const filteredProducts = products.filter(item=>item.category === 'Bread')
            setAllProducts(filteredProducts)
        }
    },[category])

    return (
        <div>
        <Helmet title='Home'></Helmet>
        <section>
        <Container>
            <Row>
            <Col lg='6' md='6'>
                <div className="hero_content">
                <h5 className='mb-3'>Easy way to make an order</h5>
                <h1 className='mb-4 hero-title'><span>HUNGRY?</span>just wait <br/> food at<span> your door</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat est corporis laudantium saepe sit atque ullam tempora fugit magni!</p>

                <div className="hero_btns d-flex align-items-center gap-5 mt-4">
                    <button className='order_btn d-flex align-items-center justify-content-between'>Order now<i className="ri-arrow-right-s-line"></i>
                    </button>
                    <button className='all_foods-btn'><Link to='/foods'>See all foods</Link></button>
                </div>
                <div className='hero_service d-flex align-items-center gap-3 mt-2'>
                    <p className='d-flex align-items-center gap-2'><span className='shipping_icon'><i className="ri-car-line"></i></span> No shipping charge</p>
                    <p className='d-flex align-items-center gap-2'><span className='shipping_icon'><i className="ri-shield-check-line"></i></span> 100% secure checkout</p>
                </div>
                </div>
            </Col>
            <Col lg='6' md='6'>
                <div className="hero_img">
                    <img crossOrigin="anonymous | use-credentials" 
                    src={imageHero}
                    alt="Food"
                    className='w-100'
                    // source={{
                    //     header: {
                    //        'Access-Control-Allow-Origin': '*'
                    //     }
                    //   }}
                        />
                </div>
            </Col>
            </Row>
        </Container>
        </section>
        <section className='pt-0'>
            <Category/>
         </section>
         <section>
            <Container>
                <Row>
                    <Col lg='12' className='text-center'>
                        <h5 className='feature_subtitle mb-4'>What we serve</h5>
                        <h2 className='feature_title'>just sit back at home</h2>
                        <h2 className='feature_title'>we will <span>take care</span></h2>
                        <p className='mb-1 mt-4 feature_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p className='feature_text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, voluptate!</p>
                    </Col>
                    {
                        featureData.map((item,index)=>(
                        <Col lg='4' md='4' key={index} className='mt-5 mb-3'>
                            <div className="feature_item text-center px-3 py-5">
                                <img src={item.imgUrl} alt="feature-img" className='w-25' />
                                <h5 className='fw-bold mb-4'>{item.title}</h5>
                                <p>{item.desc}</p>
                            </div>
                        </Col>
                        ))
                    }
                </Row>
            </Container>
         </section>
         <section>
           <Container>
           <Row>
                <Col lg='12' className='text-center'>
                    <h2>Popular Foods</h2>
                </Col>
                <Col lg='12'>
                    <div className="food_category d-flex align-items-center justify-content-center gap-3">
                        <button className={`all_btn ${category === 'ALL'? 'foodBtnActive': ''}`} onClick={()=>setCategory('ALL')}>All</button>
                        <button className={`d-flex align-items-center gap-2 ${category === 'BURGER'? 'foodBtnActive':''}`} onClick={()=>setCategory('BURGER')}><img src={foodCategoryImg1} alt="" />Burger</button>
                        <button className={`d-flex align-items-center gap-2 ${category === 'PIZZA'? 'foodBtnActive':''}`}onClick={()=>setCategory('PIZZA')}><img src={foodCategoryImg2} alt="" />Pizza</button>
                        <button className={`d-flex align-items-center gap-2 ${category === 'BREAD'? 'foodBtnActive': ''}`}onClick={()=>setCategory('BREAD')}><img src={foodCategoryImg3} alt="" />Bread</button>
                    </div>
                </Col>
                {allProducts.map(item =>(
                    // console.log(item)
                      <Col lg='3' md='4' key={item.id} className='mt-4'>
                      <ProductCard item={item}/>
                  </Col>
                ))
                }
            </Row>
           </Container>
         </section>

        </div>
       
    );
}
    

export default Home;


 