import React from 'react'
import AboutSection from '../component/about-frontend'
import FooterFrontend from '../component/footer-front'
import Cv from '../component/frontend-cv'
import FrontendNav from '../component/frontend-nav'
import FrontendHero from '../component/herobox-frontend'
import Project from '../component/projects'


class FrontendPage extends React.Component{
    render(){
        return(
            <>
                 <FrontendNav />
                <div className='frontend-page'>
                    <FrontendHero/>
                    <AboutSection/>
                    <Project/>
                    <Cv/>
                   
                </div>
                <FooterFrontend/>
            </>
        )
    }
}

export default FrontendPage;