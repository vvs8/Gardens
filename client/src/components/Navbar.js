import React, {useState, useEffect} from 'react'
import Button1 from './Button1'
import { Link, withRouter } from 'react-router-dom'
import { ImCross } from 'react-icons/im';
import {AiOutlineMenu } from 'react-icons/ai'
import {GiLotus} from 'react-icons/gi'
import '../App.css';

import './css/Navbar.css'

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#ff9900" };
    } else {
        return { color: "#ffffff" };
    }
};

const Navbar = ({ history }) => {
    
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)
    const [header, setHeader] = useState("header")
    

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
  
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        }
        else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
      }, []);
  

    const listenScrollEvent = e => {
        if (window.scrollY < 200) {
            return setHeader("mynavbar")
          } else {
            return setHeader("mynavbar1")
          } 
      }


    useEffect(() => {
        setHeader("mynavbar")
        window.addEventListener('scroll', listenScrollEvent);
      
        
      }, []);
      
      
    window.addEventListener('resize', showButton)
    
    
    return (
        
        <>
            <nav className={header}>
                <div className="navbar-container" >
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <GiLotus className='fa-typo3' />
                        Reneissance Gardens   
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        {click ? <ImCross color="white"/> : <AiOutlineMenu color="white"/>}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' style={isActive(history, "/")} onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' className='nav-links' style={isActive(history, "/services")} onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/articles' className='nav-links' style={isActive(history, "/articles")} onClick={closeMobileMenu}>
                                Articles
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/signin' className='nav-links' style={isActive(history, "/signin")} onClick={closeMobileMenu}>
                                Sign in 
                            </Link>
                        </li>

                        <li>
                            
                            <Link to='/estimate' className='nav-links-mobile' style={isActive(history, "/estimate")} onClick={closeMobileMenu}>
                                ESTIMATE
                            </Link>
                        </li>
                    </ul>
                  
                        {button && <Button1 buttonStyle ="btn--outline" > ESTIMATE </Button1>}
                
                    
                </div>
            </nav>  
        </>
    )
}

export default withRouter(Navbar);
