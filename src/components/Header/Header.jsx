import React, {useRef,useEffect} from 'react';
import '../../styles/header.css'

import { Container } from 'reactstrap';
import { NavLink,Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

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
const headRef = useRef(null);
const totalQuantity = useSelector(state => state.cart.totalQuantity)

const toggleMenu = ()=> menuRef.current.classList.toggle('show_menu')

useEffect(()=>{
    window.addEventListener('scroll',()=>{
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
            headRef.current.classList.add('header_shrink','logo_shrink')
        }
        else{
            headRef.current.classList.remove('header_shrink','logo_shrink')
        }
    })

    return ()=> window.removeEventListener('scroll',()=>{
        headRef.current.classList.remove('header_shrink','logo_shrink')
    }
    )
    
},[])

    return (
        <header className="header" ref={headRef}>
            <Container>
                <div className="nav_wrapper d-flex align-items-center justify-content-between">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                        <h5>Testy food</h5>
                    </div>

                    <div className="navigation" ref={menuRef} onClick={toggleMenu}>
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
                            <span className="cart_badge">{totalQuantity}</span>
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