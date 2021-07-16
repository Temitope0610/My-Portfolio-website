import React from 'react'
import Divide from '../asset/images/dividing icon.png'
import {Row, Col } from 'react-bootstrap'
import Fun from '../asset/images/fun.png'
import Sterling from '../asset/images/sterling.jpg'


class Project extends React.Component{
    render(){
        return(
            <div className='portfolio'>
                <img src={Divide} className='dividing-icon-portfolio1' alt="dividing icon"/>
                <img src={Divide} className='dividing-icon-portfolio2' alt="dividing icon" />
                <div className='portfolio-section projects' style={{position:'relative',height:'500px'}} id='portfolio'>
                    <h6 style={{color:'#ECE7E7'}}>My Projects</h6>
                   <Row className='content-container mt-4'>
                        <Col md={3} className='flip-card mb-3'>
                            <div className='funnellr-card'>
                                <div className='front-content'>
                                    <img src={Fun} alt="project-image" className='project-image'/>
                                  
                                </div>
                                <div className='back-content'>
                                <h1>Funnellr</h1>
                                    <p>This is a project about sales and how to create sales funnels for businness owners and marketres</p>
                                    <a href=""><button className='btn btn-view'>View Code</button></a>
                                </div>
                            </div>
                        </Col> 
                        <Col md={3} className='flip-card mb-3'>
                            <div className='funnellr-card'>
                                <div className='front-content'>
                                        <img src={Sterling} alt="project-image" className='project-image'/>
                                </div>
                                <div className='back-content'>
                                    <h1>Sterling Bank</h1>
                                    <p>This is a project cloning the website of sterling bank of Nigeria</p>
                                    <a href=""><button className='btn btn-view'>View Code</button></a>
                                </div>
                                
                            </div>
                        </Col> 
                        <Col md={3} className='flip-card mb-3'>
                            <div className='funnellr-card'>
                                <div className='front-content'>
                                        <img src={Fun} alt="project-image" className='project-image' />
                                </div>
                                <div className='back-content'>
                                <h1>Funnellr</h1>
                                        <p>This is a project about sales and how to create sales funnels for businness owners and marketres</p>
                                        <a href=""><button className='btn btn-view'>View Code</button></a>
                                </div>
                            </div>
                        </Col> 
                        <Col md={3} className='flip-card mb-3'>
                            <div className='funnellr-card'>
                                <div className='front-content'>
                                        <img src={Fun} alt="project-image" className='project-image' />
                                </div>
                                <div className='back-content'>
                                <h1>Funnellr</h1>
                                        <p>This is a project about sales and how to create sales funnels for businness owners and marketres</p>
                                        <a href=""><button className='btn btn-view'>View Code</button></a>
                                </div>
                            </div>
                        </Col>             
                   </Row>
                </div>
            </div>
        )

        
    }
}
  
export default Project;