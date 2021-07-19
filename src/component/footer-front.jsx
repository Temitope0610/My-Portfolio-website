import React from 'react'
import { Link }from 'react-router-dom'
import Contact from '../asset/images/Contact us-amico.png'
import {RiLinkedinBoxLine} from 'react-icons/ri'
import {RiTwitterFill} from 'react-icons/ri'
import { AiFillGithub } from "react-icons/ai";

class FooterFrontend extends React.Component{
    render(){
        return(
            <>
                <div className='footer' id='contact'>
                    <center>
                        <p className='mb-0'>Get in Touch</p>
                        <h6 className='mb-2'>Would you love to have my services?</h6>
                        <p className='mb-0'>+234 81 689 4126</p>
                        <div className='footer-socials'>
                            <a href='https://twitter.com/frenzy_bear?s=08'><RiTwitterFill className='social'/></a>
                            <a href="https://github.com/Temitope0610/"><AiFillGithub className='social'/></a>
                            <a href='https://www.linkedin.com/in/soyoye-temitope-7b0251104'><RiLinkedinBoxLine className='social'/></a>
                        </div>
                        <p>soyoyetemitope06@gmail.com</p>
                        
                        <Link to='/uipage'> <button className=" btn btn-developer mt-5">
                            
                            Hire me as a Ui/Ux Designer
                           
                        </button>
                        </Link>
                        
                        <img src={Contact} alt="contact us" className='contact-img' />
                    </center>
                    <div className="bottom-footer">
                        <center>
                         &#169;2021 All rights reserved.- Designed & coded by Temitope Soyoye. 
                        </center>
                    </div>
                </div>
            </>
        )
    }
}

export default FooterFrontend;