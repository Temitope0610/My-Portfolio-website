import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Profile from '../asset/images/proofile picture.png'
import Particles from 'react-tsparticles'
import {RiLinkedinBoxLine} from 'react-icons/ri'
import {RiTwitterFill} from 'react-icons/ri'
import { AiFillGithub } from "react-icons/ai";

class FrontendHero extends React.Component{
    constructor(props) {
        super(props);
    
        this.particlesInit = this.particlesInit.bind(this);
        this.particlesLoaded = this.particlesLoaded.bind(this);
        
      }
    
      particlesInit(main) {
        console.log(main);
      }
    
      particlesLoaded(container) {
        console.log(container);
      }
    render(){
        return(
            <div className='frontend-herobox' style={{height:'500px'}}>
                <Row>
                    <Col md={6} className='ui-herobox-text frontend-text'>
                        <div className='salute'>
                            <span className='salute-picture'>
                                <img src={Profile} alt="" />
                            </span>
                            <span className='salute-text'>hey,I'm Temitope</span>
                            <span className='wave'>👋</span>
                        </div>
                        <div className='mt-3'style={{color:'#ECE7E7'}}>
                            <h1 className='animate__animated animate__fadeInUp'>I <span style={{color:'#E97C35'}}>develop and code</span> beautifully</h1>
                            <h1 className='animate__animated animate__fadeInUp'>responsive user interfaces and i love what i do!</h1>
                            <p className='animate__animated animate__fadeInUp'>As a developer, I understand that an interface can only be seen and perceived as perfect by its beauty, responsiveness and easy usage by whoever comes in contact with it</p>
                           
                        </div>
                        <div className='frontend-herobox-socials mt-3'>
                            <a href='https://twitter.com/frenzy_bear?s=08'><RiTwitterFill className='social'/></a>
                            <a href="https://github.com/Temitope0610/"><AiFillGithub className='social'/></a>
                            <a href='https://www.linkedin.com/in/soyoye-temitope-7b0251104'><RiLinkedinBoxLine className='social'/></a>
                        </div>
                    </Col>
                    <Col md={6} className='particles mt-5'>
                    <Particles
                           id="tsparticles"
                           init={this.particlesInit}
                           loaded={this.particlesLoaded}
                           height='500px'
                           style={{}
                           }
                           options={{
                             fpsLimit: 60,
                             interactivity: {
                               detectsOn: "canvas",
                               events: {
                                 onClick: {
                                   enable: true,
                                   mode: "push",
                                 },
                                 onHover: {
                                   enable: true,
                                   mode: "repulse",
                                 },
                                 resize: true,
                               },
                               modes: {
                                 bubble: {
                                   distance: 400,
                                   duration: 2,
                                   opacity: 0.8,
                                   size: 150,
                                 },
                                 push: {
                                   quantity: 4,
                                 },
                                 repulse: {
                                   distance: 200,
                                   duration: 0.4,
                                 },
                               },
                             },
                             particles: {
                               color: {
                                 value: "#ffffff",
                               },
                               links: {
                                 color: "#ffffff",
                                 distance: 150,
                                 enable: true,
                                 opacity: 0.5,
                                 width: 1,
                               },
                               collisions: {
                                 enable: true,
                               },
                               move: {
                                 direction: "none",
                                 enable: true,
                                 outMode: "bounce",
                                 random: false,
                                 speed: 6,
                                 straight: false,
                               },
                               number: {
                                 density: {
                                   enable: true,
                                   value_area: 800,
                                 },
                                 value: 80,
                               },
                               opacity: {
                                 value: 0.5,
                               },
                               shape: {
                                 type: "images",
                                 image: [
                                     {src:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png'},
                                     {src:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/768px-Visual_Studio_Code_1.35_icon.svg.png"},
                                     {src:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/768px-Unofficial_JavaScript_logo_2.svg.png"},
                                     {src:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/544px-CSS3_logo_and_wordmark.svg.png'},
                                     {src:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png'},
                                 ]
                               },
                               size: {
                                 random: true,
                                 value: 5,
                               },
                             },
                             detectRetina: true,
                           }}
                    />
                    </Col>
                </Row>
            </div>
        )
    }
}


export default FrontendHero;