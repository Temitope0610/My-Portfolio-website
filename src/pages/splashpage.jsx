import React from 'react';
import { Link } from 'react-router-dom'
import Particles from 'react-tsparticles'
import Color from '../asset/images/color-palette.svg'
import Computer from '../asset/images/computer.svg'
import Sketch from '../asset/images/sketch.svg'
import Artist from '../asset/images/artist.svg'
import Vector from '../asset/images/vector.svg'
import Outline from '../asset/images/Outline.svg'
import WebDesign from '../asset/images/web-design.svg'
import Page from '../asset/images/Page-1.svg'
import Idea from '../asset/images/idea.svg'
import DesignPro from '../asset/images/design-process.svg'

class Splashpage extends React.Component{
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
            <div style={{width:'100%'}}>
                <div className='column-container'>
                    <div className='column ui-section'>
                        <Link to='/uipage'>
                        <h1>Ui/Ux Developer</h1>
                        <div className="icons">
                            <div>
                                <img src={Color} alt="" />
                            </div>
                            <div>
                                <img src={Computer} alt="" />
                            </div>
                            <div>
                                <img src={Sketch} alt="" />
                            </div>
                            <div>
                                <img src={Artist} alt="" />
                            </div>
                            <div>
                                <img src={Vector} alt="" />
                            </div>
                           
                        </div>
                        <div className='icons1'>
                            <div>
                                <img src={Outline} alt="" />
                            </div>
                            <div>
                                <img src={WebDesign} alt="" />
                            </div>
                        </div>
                        <div className="icons2">
                            <div>
                                <img src={Page} alt="" />
                            </div>
                            <div>
                                <img src={Idea} alt="" />
                            </div>
                            <div>
                                <img src={DesignPro} alt="" />
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className='column frontend-section'>
                        <Link to='/frontendpage'>
                    <h1>FrontEnd Developer</h1>
                    <Particles
                           id="tsparticles"
                           init={this.particlesInit}
                           loaded={this.particlesLoaded}
                           height='700px'
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
                    </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Splashpage;