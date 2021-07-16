import React, { useState, useRef } from 'react'
import Logo from '../asset/images/my logo/logoblk.png'
import {Link} from 'react-scroll'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close'
import 'wow.js'




const UiNavbar = () =>{
        // const [click, setClick] = useState(false);

    const navBtn = useRef()
    const remNavBtn = useRef()
    const mobileNavMenu = useRef();


    const showMobileNav = () => {
        mobileNavMenu.current.classList.remove("d-none");
        mobileNavMenu.current.classList.add("d-sm-block");

        navBtn.current.classList.add("d-none");
        remNavBtn.current.classList.remove("d-none");
    }

    const hideMobileNav = () => {
        mobileNavMenu.current.classList.add("d-none");
        mobileNavMenu.current.classList.remove("d-sm-block");

        navBtn.current.classList.remove("d-none");
        remNavBtn.current.classList.add("d-none");
    }

    //change navbar color on scroll//

    const [colorChange, setColorChange] = useState(false);
    const changeNav = () =>{
        if(window.scrollY >= 80){
            setColorChange(true);
        }else {
            setColorChange(false)
        }
    }
    window.addEventListener('scroll', changeNav);

        return(
            <div className={colorChange ? "navbar colorChange" : "navbar"} id='navbar'>
               <img src={Logo} className="logo" alt="my logo in black"/>
               <ul className='nav-items'>
                    <li className='items'><Link activeClass='active' to='about' spy={true} smooth={true}> About Me</Link></li>
                    <li className='items'><Link to='portfolio' spy={true} smooth={true}> Portfolio</Link></li>
                    <li className='items'><Link to='resume'spy={true} smooth={true}> Resume</Link></li>
               </ul>
               <button className='contact-btn'><Link to='contact' spy={true} smooth={true}>Contact Me</Link></button>
               <div className="mobile-menu">
                   <MenuIcon className="nav-btn-icon" ref={navBtn} onClick={showMobileNav }  />
                   <CloseIcon className="nav-btn-icon d-md-none d-none" onClick={hideMobileNav} ref={remNavBtn}/>
               </div>
               
               {/* mobile-nav */}
               <div ref={mobileNavMenu} className="mobile-nav d-md-none d-none animate__animated animate__fadeInRight">
               <ul className='mobile-menu-items'>
                    <li className='items'><Link activeClass='active' to='about' spy={true} smooth={true}> About Me</Link></li>
                    <li className='items'><Link to='portfolio' spy={true} smooth={true}> Portfolio</Link></li>
                    <li className='items'><Link to='resume'spy={true} smooth={true}> Resume</Link></li>
               </ul>
              <center><button className='contact-btn-mobile'><Link to='contact' spy={true} smooth={true}>Contact Me</Link></button></center>
               </div>
            </div>
        )
}

export default UiNavbar;