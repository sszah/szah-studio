import React, { PureComponent } from 'react'
import About from './About';
import Header from './Header'
import Banner from './Banner'
import Projects from './Projects'
import Navbar from './Navbar'
import Services from './Services'
import Contact from './Contact'



export class Main extends PureComponent {
  render() {
    return (
        
     <div>
        
        <Header/>
        <Banner/>
        <About/>
        <Services/>
        <Projects/>
        <Contact/>
        <Navbar/>
     </div>
    
    )
  }
}

export default Main