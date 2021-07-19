import React from 'react'
import Ux from '../asset/images/ux.gif'
import { Col, Row } from 'react-bootstrap';
import Profile from '../asset/images/proofile picture.png'
import {RiBehanceFill} from 'react-icons/ri'
import { RiDribbbleFill } from "react-icons/ri";
import {RiTwitterFill} from 'react-icons/ri'
import {RiLinkedinBoxLine} from 'react-icons/ri'

class Uiherobox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: "Hey, I'm Temitope",
            count: 0,
            show: '',     
        }
        this.update = this.update.bind(this);
    }
    componentDidMount(){
        this.timerID = setInterval(
            () => this.update(),
            100
        );
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    update(){
        const counter = this.state.count;
        const letter = this.state.text.charAt(counter);
        const textlength = this.state.text.length;

        console.log('counter : " + counter + " / letter : " + letter');

        if(counter <= textlength){
            this.setState({
                show: this.state.show + letter,
                count: this.state.count + 1,
            });
        }else{
            clearInterval(this.timerID);
        }
    }
    render(){
        return(
            <div className='ui-herobox'>
                <Row>
                    <Col md='6'>
                    <img src={Ux} className='ui-herobox-img' alt="herobox" />
                    </Col>
                    <Col md='6' className='ui-herobox-text'>
                        <div className='salute'>
                            <span className='salute-picture'>
                                <img src={Profile} alt="profile" />
                            </span>
                            <span className='salute-text'>{this.state.show}</span>
                            <span style={{marginLeft:'10px'}} className='wave'>👋</span>
                        </div>
                        <div className='ui-herobox-intro mt-3'>
                            <h1 className='animate__animated animate__fadeInUp'>I <span style={{color:'#E97C35'}}>design</span> products</h1>
                            <h1 className='animate__animated animate__fadeInUp'>and user interfaces that people fall in love with</h1>
                            <p className='animate__animated animate__fadeInUp'>As a designer, I understand that an interface can only be seen and perceived as perfect by its beauty, responsiveness and easy usage by whoever comes in contact with it</p>
                            <h5 className='animate__animated animate__fadeInUp'>Get <span style={{color:'#E97C35'}}>Better Experiences</span> with creative designs</h5>
                        </div>
                        <div className='ui-herobox-socials mt-3'>
                            <a href='https://twitter.com/frenzy_bear?s=08'><RiTwitterFill className='social'/></a>
                            <a href='https://dribbble.com/Titemi'><RiDribbbleFill className='social'/></a>
                            <a href='https://www.behance.net/temitopesoyoye'><RiBehanceFill className='social' /></a>
                            <a href='https://www.linkedin.com/in/soyoye-temitope-7b0251104'><RiLinkedinBoxLine className='social'/></a>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Uiherobox;