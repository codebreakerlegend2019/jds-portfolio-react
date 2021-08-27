
import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro'
import TechSkills from './components/techskills/Techskills'
import WorkExperiences from './components/workexperience/Workexperiences'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Menu from './components/menu/Menu'
import "./app.scss"
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [menuActive, setMenuActive] = useState('intro');

  const menuActiveChanger = (e) =>{
    let clientHeight = e.target.clientHeight;
    let scrollTop = e.target.scrollTop.toFixed();

    console.log(clientHeight)
    console.log(scrollTop)
    
    if(clientHeight * 0 == scrollTop)
    {
      setMenuActive('intro')
    }
    else if(clientHeight * 1 == scrollTop)
    {
      setMenuActive('techSkills')
    }
    else if(clientHeight * 2 == scrollTop ||(clientHeight * 2)-1 == scrollTop )
    {
      console.log("working exp")
      setMenuActive('workexperiences')
    }
    // else if(clientHeight * 3 == scrollTop)
    // {
    //   setMenuActive('testimonials')
    // }
    // else if(clientHeight * 4 == scrollTop)
    // {
    //   setMenuActive('contact')
    // }
  }

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} menuActive={menuActive} setMenuActive={setMenuActive}/>
      <div onScroll={menuActiveChanger} className="sections">
        <Intro/>
        <TechSkills/>
        <WorkExperiences/>
        {/* <Testimonials/>
        <Contact/> */}
      </div>
    </div>
  );
}

export default App;
