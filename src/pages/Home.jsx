import React from 'react';
import { useEffect, useState } from 'react';
import { Container,Row,Col,ListGroup,ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

import '../styles/hero-section.css';
import '../styles/home.css';

import { Helmet } from '../components/Helmet/Helmet.js';
import { Category } from '../components/UI/category/Category.jsx';
import { ProductCard } from '../components/UI/product-card/ProductCard.jsx';
import {TestomonialSlider} from '../components/UI/slider/TestomonialSlider.jsx'

import products from '../assets/fake-data/products.js';

import imageHero from '../assets/images/hero.png';
import featureImg1 from '../assets/images/service-01.png';
import featureImg2 from '../assets/images/service-02.png';
import featureImg3 from '../assets/images/service-03.png';

import foodCategoryImg1 from '../assets/images/hamburger.png';
import foodCategoryImg2 from '../assets/images/pizza.png';
import foodCategoryImg3 from '../assets/images/bread.png';

import whyImg from '../assets/images/location.png';
import networkImg from '../assets/images/network.png';


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
    const [hotPizza,setHotPizza] = useState([]);

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

    useEffect(()=>{
        const filteredProduct = products.filter(item=>item.category === 'Pizza')
        const slicePizza = filteredProduct.slice(0,4)
        setHotPizza(slicePizza)
    },[])

    return (
        <div>
        <Helmet title='Home'></Helmet>
        <section>
        <Container>
            <Row>
            <Col lg='6' md='6'>
                <div className="hero_content">
                <h5 className='mb-3'>Easy way to make an order</h5>
                <h1 className='hero-title mb-4 '><span>HUNGRY?</span>just wait <br/> food at<span> your door</span></h1>
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
                        <Col lg='4' md='6' sm='6' key={index} className='mt-5 mb-3'>
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
                      <Col lg='3' md='4' sm='6' xs='6' key={item.id} className='mt-4'>
                      <ProductCard item={item}/>
                  </Col>
                ))
                }
            </Row>
           </Container>
         </section>
         <section className='why_choose-us'>
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <img src={whyImg} alt="why-tasty-treat" className='w-100' />
                    </Col>
                    <Col lg='6' md='6'>
                        <div className="why_tasty-treat">
                            <h2 className='tasty_treat-title mb-3'>Why <span>Tasty Treat ?</span></h2>
                            <p className='tasty_treat-des'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas earum, omnis quidem nam minima repellendus, 
                                dolorem recusandae vitae iste accusantium, ab ducimus voluptatibus! Error omnis, beatae esse vero eaque id.</p>
                                <ListGroup className='mt-3'>
                                    <ListGroupItem className='border-0 ps-0'>
                                        <p className='choose_us-title d-flex align-items-center gap-2'><i className="ri-checkbox-circle-line"></i>
                                            Fresh and tasty food</p>
                                        <p className='choose_us-des'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                            Perspiciatis in id quod quasi veniam tempora rem illum dolores! Natus neque optio repellendus reprehenderit officia. 
                                            Quo consequatur molestiae officiis fugit odio?</p>
                                    </ListGroupItem>
                                    <ListGroupItem className='border-0 ps-0 '>
                                        <p className='choose_us-title d-flex align-items-center gap-2'><i className="ri-checkbox-circle-line"></i>
                                            Quality support </p>
                                        <p className='choose_us-des'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi tempore soluta aut dolores placeat tempora. Esse, 
                                            doloremque iste fugiat illum, 
                                            error optio repellendus, nulla eum nisi vero nihil laborum provident!</p>
                                    </ListGroupItem>
                                    <ListGroupItem className='border-0 ps-0 '>
                                        <p className='choose_us-title d-flex align-items-center gap-2'><i className="ri-checkbox-circle-line"></i>
                                            Order from any location</p>
                                        <p className='choose_us-des'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, sed!.</p>
                                    </ListGroupItem>
                                </ListGroup>
                        </div>
                    </Col>
                </Row>
            </Container>
         </section>
         <section className='pt-0'>
            <Container>
                <Row>
                    <Col lg='12' className='text-center mb-4'>
                     <h2>Hot Pizza</h2>
                    </Col>
                    {
                        hotPizza.map(item=>(
                            <Col lg='3' md='4' key={item.id}>
                                <ProductCard item={item}/>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
         </section>
         <section>
            <Container>
                <Row>
                <Col lg='6' md='6'>
                       <div className='testimonial mb-3'> 
                        <h5 className='testimonial_subtitle'>Testimonial</h5>
                        </div>
                       <h2 className='testimonial_title'>What our <span>customers</span> are saying</h2>
                       <p className='testimonial_des'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                       Voluptas dolore dolor nostrum dolores sunt iure fuga aliquam ipsam nam! Alias?
                       </p>
                       <TestomonialSlider/>
                    </Col>
                    <Col lg='6' md='6'>
                        <img src={networkImg} alt="testimonial_img" className='w-100'/>
                    </Col>
                </Row>
            </Container>
         </section>

        </div>
       
    );
}
    

export default Home;


 