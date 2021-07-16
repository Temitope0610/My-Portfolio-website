import React from 'react'
import Divide from '../asset/images/dividing icon.png'
import { Col, Container, Row } from 'react-bootstrap';
import Temitope from '../asset/images/temitope.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'wow.js'
import '@fortawesome/fontawesome-svg-core'
import {faSpinner } from '@fortawesome/free-solid-svg-icons'
import { Progress } from 'react-sweet-progress'
import "react-sweet-progress/lib/style.css";

class About extends React.Component{
    render(){
        return(
            <div>
                <img src={Divide} className='dividing-icon fa-spinner' alt="dividing icon" />
                <div className='about-section' id='about'>
                    <Row>
                        <Col sm='3'>
                            <img src={Temitope} className='about-section-img' alt="an image of myself" />
                        </Col>
                        <Col sm='3' className='about-section-text'>
                            <h6>About Me</h6>
                            <p><span style={{color:'#e97c35'}}>Temitope</span> is a Lagos, Nigeria based designer with 2 years experience. She has worked on a couple of ui projects as an inhouse designer at a beginner's level. She has a very unique and eye-catching talent at creating beautiful and innovative user interfaces.</p>
                            <p>Any organization she joins always marvels at her level ofprofessionalism and strong passion behind getting jobs done efficiently and timely. She keeps same ethos for doing excentlenlly well as well in her personal amd daily growth. She strongly believes that design and story trlling is a powerful medium to make a significant change to the world at large.</p>
                            <p><span style={{color:'#e97c35'}}>Temitope</span> is very comfortable and confident in working on a range of projects and brands from prototyping designs to writing codes to bring the designs to life. She always brings a quality of work and creativity that is hard to match.</p>
                            <p>Outside work, <span style={{color:"#e97c35"}}>Temitope</span> finds inspiration at relaxing by the seaside at dawn and going on fun trips with her family and friends. Her thirst for life and its experiences brings the strong connection between her designs and her fun life.</p>
                            <p>Outside work, <span style={{color:"#e97c35"}}>Temitope</span> finds inspiration at relaxing by the seaside at dawn and going on fun trips with her family and friends. Her thirst for life and its experiences brings the strong connection between her designs and her fun life.</p>
                        </Col>
                        <Col sm='3'>
                            <h6>Tools</h6>
                            <p>Adobe Xd, Figma, InVision</p>
                            <h6 className='mt-4'>Skills</h6>
                            <p>Prototyping</p>
                            <Progress percent={75} theme={{active:{
                                color: '#e97c35'
                            }}} />
                           <p>Wireframing</p>
                           <Progress percent={60} theme={{active:{
                                color: '#e97c35'
                            }}} />
                            <p>Visual Communication</p>
                            <Progress percent={80} theme={{active:{
                                color: '#e97c35'
                            }}} />
                            <p>InVision</p>
                            <Progress percent={20} theme={{active:{
                                color: '#e97c35'
                            }}} />
                        </Col>
                        <Col sm='3' className='clients'>
                            <h6>Clients and Collaborators</h6>
                            <p>Nerdyeye, Eke Igwe Eke</p>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default About;