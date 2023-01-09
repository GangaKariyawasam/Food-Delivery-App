import React from 'react';
import '../../styles/footer.css'
import { Container,Row,Col,ListGroup,ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/res-logo.png';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg='3' md='4' sm='6'>
                    <div className="footer_logo text-start">
                        <img src={logo} alt="logo" />
                        <h5>Testy food</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Consectetur temporibus fuga, perspiciatis molestiae, distinctio culpa unde voluptas
                            a nobis quo adipisci voluptates? Quos ut recusandae aut molestiae aliquid. Officia, enim.</p>
                    </div> 
                    </Col>
                    <Col lg='3' md='4' sm='6'>
                        <h4 className='footer_title'>Delivery Time</h4>
                        <ListGroup className='delivery_time-list'>
                            <ListGroupItem className='delivery_time-item border-0 ps-0'>
                                <span>Sunday - Thursday</span>
                                <p>10:00am - 11:00pm</p>
                            </ListGroupItem>
                            <ListGroupItem className='delivery_time-item border-0 ps-0'>
                                <span>Friday - Saturday</span>
                                <p>Off day</p>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col lg='3' md='4' sm='6'>
                    <h4 className='footer_title'>Contact</h4>
                        <ListGroup className='delivery_time-list'>
                        <ListGroupItem className='delivery_time-item border-0 ps-0'>
                                <span>Location: Dehiwala,Colombo</span>
                            </ListGroupItem>
                            <ListGroupItem className='delivery_time-item border-0 ps-0'>
                                <span>Phone: 0714297588</span>
                            </ListGroupItem>
                            <ListGroupItem className='delivery_time-item border-0 ps-0'>
                                <span>Email: kpgangajayakodi@gmail.com</span>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col lg='3' md='4' sm='6'>
                    <h4 className='footer_title'>Newsletter</h4>
                    <p>Subscribe our Newsletters</p>
                    <div className="newsLetter">
                        <input type="email" placeholder='Enter Your Email' />
                        <span><i className="ri-send-plane-2-fill"></i></span>
                    </div>
                    </Col>
                </Row>
                <Row className="m-5">
                    <Col lg='6' md='6'>
                        <p className="copyright_text">Copyright-2022, website made by K.P.G.K Jayakodi.All Right Received.</p>
                    </Col>
                    <Col lg='6' md='6'>
                    <div className="social_links d-flex align-items-center gap-4 justify-content-end">
                        <p className='m-0'>Follow:</p>
                        <span> <Link to='https://www.facebook.com/ganga.kariyawasam.54'><i class="ri-facebook-line"></i></Link></span>
                        <span><Link to=''><i className="ri-instagram-line"></i></Link></span>
                        <span><Link to=''><i className="ri-twitter-line"></i></Link></span>
                        <span><Link to=''><i className="ri-linkedin-line"></i></Link></span>
                    </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

// export default Footer;