import React, {useRef} from 'react';
import '../../styles/header.css'

import { Container } from 'reactstrap';
import { NavLink,Link } from 'react-router-dom';
import logo from '../../assets/images/res-logo.png'

const nav__links = [
{
    display:'Home',
    path:'/home'
},
{
    display:'Foods',
    path:'/foods'
},
{
    display:'Cart',
    path:'/cart'
},
{
    display:'Contact',
    path:'/contact'
},
]


export const Header = () => {
const menuRef = useRef(null);
const toggleMenu = ()=> menuRef.current.classList.toggle('show_menu')

    return (
        <header className="header">
            <Container>
                <div className="nav_wrapper d-flex align-items-center justify-content-between">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                        <h5>Testy food</h5>
                    </div>

                    <div className="navigation" ref={menuRef}  onClick={toggleMenu}>
                        <div className="menu d-flex align-items-center gap-5">
                        {
                          nav__links.map((item,index)=>(
                            <NavLink 
                            to={item.path} 
                            key={index}
                            className={navClass=>navClass.isActive? 'active_menu':''}
                            >{item.display}</NavLink>
                          ))
                        }
                        </div>
                    </div>

                    <div className="nav_right d-flex align-items-center gap-3">
                        <span className="cart_icon">
                            <i className="ri-shopping-basket-line"></i>
                            <span className="cart_badge">2</span>
                        </span>

                        <span className="user">
                            <Link to ='/login'><i className="ri-user-line"></i></Link>
                        </span>

                        <span className="mobile_menu" onClick={toggleMenu}>
                        <i className="ri-menu-line"></i>
                        </span>
                    </div>
                </div>
            </Container>
        </header>
    );
};

// export default Header;