import React, { useContext } from 'react'
import './Navbar.css'
import { useState } from 'react'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'
import nav_dropdown from '../Assets/dropdown_icon.png'
import { useRef } from 'react'

const Navbar = () => {
    
    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) =>{
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

  return (

    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            {/* <p>Shopper</p> */}
        </div>
        <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
        <ul ref={menuRef} className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to= '/' >Shop</Link> {menu==="shop"?<hr/>:<></>} </li>
            <li onClick={()=>{setMenu("mens")}}> <Link style={{textDecoration: 'none'}} to='/men'>Skate Boards</Link> {menu==="mens"?<hr/>:<></>} </li>
            <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration: 'none'}} to='/women'>LongBoards</Link> {menu==="womens"?<hr/>:<></>} </li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration: 'none'}} to='/kids'>Cruisers</Link> {menu==="kids"?<hr/>:<></>} </li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button><p>Login</p></button></Link>
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">{getTotalCartItems}</div>
        </div>
    </div>
  )
}

export default Navbar
