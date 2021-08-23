
import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro'
import TechSkills from './components/techskills/Techskills'
import Works from './components/works/Works'
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
    let scrollTop = e.target.scrollTop;
    if(clientHeight * 0 == scrollTop)
    {
      console.log('intro')
      setMenuActive('intro')
    }
    else if(clientHeight * 1 == scrollTop)
    {
      console.log('techSkills')
      setMenuActive('techSkills')
    }
    else if(clientHeight * 2 == scrollTop)
    {
      console.log('works')
      setMenuActive('works')
    }  
    else if(clientHeight * 3 == scrollTop)
    {
      console.log('testimonials')
      setMenuActive('testimonials')
    }
    else if(clientHeight * 4 == scrollTop)
    {
      console.log('contact')
      setMenuActive('contact')
    }
  }

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} menuActive={menuActive}/>
      <div onScroll={menuActiveChanger} className="sections">
        <Intro/>
        <TechSkills/>
        <Works/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
