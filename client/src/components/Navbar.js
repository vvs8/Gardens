import React, {useState, useEffect, Fragment } from 'react'
import { itemTotal } from "../system/cartHelpers";
import { Popover, OverlayTrigger, Button } from 'react-bootstrap';
import { signout, isAuthenticated } from "../auth";
import { Link, withRouter } from 'react-router-dom'
import { ImCross } from 'react-icons/im';
import {AiOutlineMenu} from 'react-icons/ai'
import {FiHome} from 'react-icons/fi'
import {RiAccountCircleLine, RiShoppingBagLine, RiArticleLine, RiShoppingCart2Line } from 'react-icons/ri'
import {GiLotus} from 'react-icons/gi'
import Divider from '@material-ui/core/Divider';

import '../App.css';

import './css/Navbar.css'

const isActive = (history, path) => {
    if (history.location.pathname === path) return { color: "#ff9900" };
    else return { color: "#ffffff" };
}

const Navbar = ({ history }) => {
    const [click, setClick] = useState(false)
    const [header, setHeader] = useState("header")
    
    const handleClick = () => {
        setClick(!click)
        if (!click) document.body.classList.add('scrollblock');
        else document.body.classList.remove('scrollblock');
    }

    const closeMobileMenu = () => {
        setClick(false)
        document.body.classList.remove('scrollblock');
    } 
  
    const listenScrollEvent = e => {
       
            if (window.scrollY < 200) {return setHeader("mynavbar");}
            else return setHeader("mynavbar1");
        
        
    }

    useEffect(() => {
        setHeader("mynavbar")
        if (window.screen.width > 900) {
            window.addEventListener('scroll', listenScrollEvent);
        }
      }, []);

    const popover = (
        <Popover className="pop-container" id="popover-basic" >
            <Popover.Header as="h3">Hello, </Popover.Header>
            <Popover.Body className="pop-body">
            {!isAuthenticated() && (
                <Fragment>
                    <li>
                        <Link className="signin-links" to="/signin">
                            <Button variant="warning">Sign in</Button>
                        </Link>
                    </li>
                    <br></br>
                    <strong>Don't have an account?</strong><small> Click below:</small> 
                    <li>
                        <Link className="signon-links" to="/signup">
                            Create Your Account
                        </Link>
                    </li>
                </Fragment>   
            )}
            {isAuthenticated() && (
                <Fragment>
                    <li>
                        <Link className="signon-links" to="/user/dashboard">
                            Dashboard
                        </Link>
                    </li>
                    <br></br>
                    <li>
                        <Link className="signon-links" to="/user/settings">
                            Settings
                        </Link>
                    </li>
                    <br></br>
                    <li>
                        <span className="signon-links"
                            onClick={ () => signout(() => {history.push("/");}) }
                        >
                            Sign out
                        </span>
                    </li>
                </Fragment>   
            )}
            </Popover.Body>
        </Popover>
    );
      
    const Account = () => (
        <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={popover}>
            <div className='nav-links' style={{cursor:'pointer'}}>
                <RiAccountCircleLine className='fa-typo3'/>
            </div>
        </OverlayTrigger>  
    );

    const MobileMenu = () => {
        return (
            <div>
                <Fragment>
                <div className={click ? 'mnav-menu active' : 'mnav-menu'}>
                <ul >
                    <li className='mnav-item'>
                        <Link to='/signin' className='mnav-links'  onClick={closeMobileMenu}>
                        <RiAccountCircleLine className='fa-typo4'/>
                        </Link>
                    </li>
                    <li className='mnav-item'>
                        <Link to='/cart' className='mnav-links'  onClick={closeMobileMenu}>
                            <RiShoppingCart2Line className='fa-typo4'/>
                            <sup>
                                <small className="cart-badge">{itemTotal()}</small>
                            </sup>
                        </Link>
                    </li>
            
                        <div class="hl"></div>
                 
                    <li className='mnav-item'>
                        <Link to='/' className='mnav-links' style={isActive(history, "/")} onClick={closeMobileMenu}>
                            <FiHome className='fa-typo4'/>
                            Home
                        </Link>
                    </li>
                    <li className='mnav-item'>
                        <Link to='/services' className='mnav-links' style={isActive(history, "/services")} onClick={closeMobileMenu}>
                            <RiShoppingBagLine className='fa-typo4'/>
                            Services
                        </Link>
                    </li>
                    <li className='mnav-item'>
                        <Link to='/articles' className='mnav-links' style={isActive(history, "/articles")} onClick={closeMobileMenu}>
                            <RiArticleLine className='fa-typo4'/>
                            Articles
                        </Link>
                    </li> 
                </ul>
                </div>
            </Fragment>
            </div>        
        )
    }
    
    return (
        <>
            <nav className='mynavbar'>
                <div className="navbar-container" >
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                   
                        servicemarket  
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        {click ? <ImCross color="white"/> : <AiOutlineMenu color="white"/>}
                    </div>
                    <ul className='nav-menu'>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' style={isActive(history, "/")} onClick={closeMobileMenu}>
                                <FiHome className='fa-typo4'/>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' className='nav-links' style={isActive(history, "/services")} onClick={closeMobileMenu}>
                                <RiShoppingBagLine className='fa-typo4'/>
                                Services
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/articles' className='nav-links' style={isActive(history, "/articles")} onClick={closeMobileMenu}>
                                <RiArticleLine className='fa-typo4'/>
                                Articles
                            </Link>
                        </li>
                        <li className='nav-item'>
                        <div class="vl"></div>
                        </li>
                        <li className='nav-item'>
                            <Account/>
                        </li>
                        <li className='nav-item'>
                            <Link to='/cart' className='nav-links'  onClick={closeMobileMenu}>
                                <RiShoppingCart2Line className='fa-typo4'/>
                                <sup>
                                    <small className="cart-badge">{itemTotal()}</small>
                                </sup>
                            </Link>
                        </li>
                    </ul>
                    
                </div>
                <MobileMenu/>
            </nav>  
            
        </>
    )
}

export default withRouter(Navbar);