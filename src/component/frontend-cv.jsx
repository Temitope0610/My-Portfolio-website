import React from 'react'
import Divide from '../asset/images/dividing icon.png'

class Cv extends React.Component{
    render(){
        return(
            <div className='cv-section'>
                <img src={Divide} className='dividing-icon-resume1' alt='section divider' />
                <img src={Divide} className='dividing-icon-resume2' alt='section divider'  />
                <div className='resume-section cv' id='resume'>
                    <h6 style={{color:'#ECE7E7'}}>My Resume</h6>
                    <div className="timeline mt-5">
                        <div className="container right">
                        <h2 style={{color:'#ECE7E7'}}>Experience</h2>
                        </div>
                        <div className="container left mt-2">
                            <div className='content'>
                                <h4>2019-2021</h4>
                                <p style={{color:'#ECE7E7'}}>NerdyEye Tech Ltd</p>
                                <p style={{color:'#ECE7E7'}}>Frontend Developer</p>
                            </div>
                        </div>
                    </div>
                    <div className='resume-btn'>
                    <button className='btn btn-hire' ><a href='mailto:soyoyetemitope06@gmail.com' style={{color:'#ECE7E7'}}>Hire Me</a></button>
                    <button className='btn btn-download'>Download Resume</button>

                    </div>
                </div>
            </div>
        )
    }
}
export default Cv;