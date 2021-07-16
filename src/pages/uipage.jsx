import React from 'react'
import About from '../component/about'
import Uiherobox from '../component/herobox-ui'
import Portfolio from '../component/portfolio'
import UiNavbar from '../component/ui-navbar'
import Resume from '../component/resume'
import Footer from '../component/footer'


class Uipage extends React.Component{
    render(){
        return(
            <>
              <UiNavbar />
            <div className="ui-page">
                <Uiherobox/>
                <About/>
                <Portfolio/>
                <Resume/>
            </div>
            <Footer />
            </>
        )
    }
}

export default Uipage;