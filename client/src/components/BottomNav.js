import React, {useState, useEffect, Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import StorefrontIcon from '@material-ui/icons/Storefront';
import WorkIcon from '@material-ui/icons/Work';

import './css/BottomNav.css'
import { itemTotal } from "../system/cartHelpers";
import {RiAccountCircleLine, RiShoppingBagLine, RiArticleLine, RiShoppingCart2Line } from 'react-icons/ri'

const isActive = (history, path) => {
    if (history.location.pathname === path) return { color: "#ff9900" };
    else return { color: "rgb(83, 83, 83)" };
}
const isActive2 = (history, path) => {
    if (history.location.pathname === path) return true;
    else return true;
}

const BottomNav = ({ history }) => {
    const [display, setDisplay] = React.useState(false);

    function resize() {
        if (window.innerWidth < 900) setDisplay(true);
        else setDisplay(false);
    }

    window.addEventListener('resize', resize)
    
    useEffect(() => {
        if (window.innerWidth < 900) {
        setDisplay(true)
        }
    }, []);
  
    return (
    (display) &&  (
        <>
            <nav className='mmnavbar'>
                <div className="mmnavbar-container" >
                    <div className='mmnav-menu'>
                        <div className='mmnav-item'>
                            <Link to='/' className='mmnav-links' style={isActive(history, "/")} >
                                <HomeIcon className='mmfa-typo4'/>
                                {(isActive2(history, "/")) && ( <span className='mmfa-typo5'>Home</span>)}
                            </Link>
                        </div>
                        <div className='mmnav-item'>
                            <Link to='/services' className='mmnav-links' style={isActive(history, "/services")} >
                                <StorefrontIcon className='mmfa-typo4'/>
                                {(isActive2(history, "/services")) && ( <span className='mmfa-typo5'>Services</span>)}
                            </Link>
                        </div>
                        <div className='mmnav-item'>
                            <Link to='/user/dashboard' className='mmnav-links'  style={isActive(history, "/user/dashboard")} >
                                <AccountCircleIcon className='mmfa-typo4'/>
                                {isActive2(history, "/user/dashboard") && ( <span className='mmfa-typo5'>Account</span>)}
                            </Link>  
                        </div>
                        <div className='mmnav-item'>
                            <Link to='/cart' className='mmnav-links' style={isActive(history, "/cart")} >
                                <WorkIcon className='mmfa-typo4'/>
                                <sup>
                                <small className="">{itemTotal()}</small>
                                </sup>
                                {isActive2(history, "/cart") && ( <span className='mmfa-typo5'>MyOrder</span>)}
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>  
        </>
    )
    );
}

export default withRouter(BottomNav)