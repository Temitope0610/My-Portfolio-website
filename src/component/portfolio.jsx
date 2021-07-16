import React from 'react'
import Divide from '../asset/images/dividing icon.png'
import Strategize from '../asset/images/strategize.png'
import Flow from '../asset/images/flow arrow.png'
import Design from '../asset/images/design.png'
import Down from '../asset/images/flow down arrow.png'
import Develop from '../asset/images/develop.png'
import Usability from '../asset/images/Usability.png'
import Left from '../asset/images/flow left arrow.png'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Funnelr from '../asset/images/Home.png'
import Play from '../asset/images/3d.jpg'
import Foodie from '../asset/images/foodie.jpg'
import Grandell from '../asset/images/grandell.png'
import InfiniteCarousel from 'react-leaf-carousel'

class Portfolio extends React.Component{
    render(){
        return(
            <div>
                <img src={Divide} className='dividing-icon-portfolio1' alt="dividing icon" />
                <img src={Divide} className='dividing-icon-portfolio2' alt="dividing icon" />
                <div className='portfolio-section' style={{position:'relative',height:'500px'}} id='portfolio'>
                    <h6>How I Work:</h6>
                    <div className='strategize mb-5'>
                        <img src={Strategize} className='portfolio-imgs strategize-img' alt="picture of lady strategizing" />
                        {/* <h6>Strategize</h6> */}
                        <img src={Design} style={{float:'right'}} className='portfolio-imgs design-img' alt="picture of lady designing" />
                    </div>
                    <img src={Flow} className='arrow-top' alt="flow arrow" />
                    <img src={Down} className='arrow-right' alt="" />
                    <img src={Left} className='arrow-down' alt="flow arrow" />
                    <div className='develop'>
                        <img src={Usability} className='portfolio-imgs usability-img' alt="" />
                        <img src={Develop} style={{float:'right'}} className='portfolio-imgs develop-img' alt="picture of lady developing" />
                    </div>
                    <span className='design-flow-elipse'>
                        My Design Process
                    </span>
                    <h6 className='mt-5' style={{float:'right'}}>Recent Projects</h6>
                    <InfiniteCarousel
                     breakpoints={[
                        {
                          breakpoint: 375,
                          settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            dots:false,
                            arrows:false,
                            autoCycle:true
                          },
                        },
                        {
                          breakpoint: 768,
                          settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3
                            ,
                            dots:false,
                            arrows:false,
                            autoCycle:true
                          },
                        },
                      ]}
                      dots={true}
                      arrows={false}
                      showSides={true}
                      sidesOpacity={1}
                      sideSize={0.5}
                      slidesToScroll={3}
                      slidesToShow={3}
                      scrollOnDevice={true}
                      autoCycle={true}>
                        <div className='card-container'>
                            <img src={Funnelr} alt="image of funnelr project" />
                            <span className='card-desc'>
                                <h2>Funnelr Project</h2>
                                <p>This is a project for sales and funnel creations for business owners as well as marketers.</p>
                                <button className='btn btn-see mt-3'>See More</button>
                            </span>
                        </div>
                        <div className='card-container'>
                            <img src={Play} alt="image of 3d play button project" height='400px' />
                            <span className='card-desc'>
                                <h2>3D Play Button</h2>
                                <p>This a simple play button showing the power of neuphormism.</p>
                                <button className='btn btn-see mt-3'>See More</button>
                            </span>
                        </div>
                        <div className='card-container'>
                            <img src={Foodie} alt="image of foodie project" />
                            <span className='card-desc'>
                                <h2>Foodie.Ng Project</h2>
                                <p>A food app project for online food and beverage orders and deliveries.</p>
                                <button className='btn btn-see mt-3'><a href='https://www.behance.net/gallery/101986357/Foodieng%28Food-delivery-App%29'>See More</a></button>
                            </span>
                        </div>
                        <div className='card-container'>
                            <img src={Grandell} alt="image of grandell project"/>
                            <span className='card-desc'>
                                <h2>Grandell Project</h2>
                                <p>A peer-to-peer lending platform that connects lenders to borrowers.</p>
                                <button className='btn btn-see mt-3'>See More</button>
                            </span>
                        </div>
                    </InfiniteCarousel>
                </div>
            </div>
        )

        
    }
}
  
export default Portfolio;