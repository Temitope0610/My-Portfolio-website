import React from 'react'
import Divide from '../asset/images/dividing icon.png'

class Resume extends React.Component{
    render(){
        return(
            <div>
                <img src={Divide} className='dividing-icon-resume1' alt="dividing icon" />
                <img src={Divide} className='dividing-icon-resume2' alt="dividing icon" />
                <div className='resume-section' id='resume'>
                    <h6>My Resume</h6>
                    <div className="timeline">
                        <div className="container right">
                        <h2>Experience</h2>
                        </div>
                        <div className="container left mt-2">
                            <div className='content'>
                                <h4>2019-2021</h4>
                                <p>NerdyEye Tech Ltd</p>
                                <p>Product Designer Intern</p>
                            </div>
                        </div>
                    </div>
                    <div className='resume-btn'>
                    <button className='btn btn-hire'><a href='mailto:soyoyetemitope06@gmail.com'>Hire Me</a></button>
                    <button className='btn btn-download'><a href={Resume} download>Download Resume</a></button>

                    </div>
                </div>
            </div>
        )
    }
}
export default Resume;