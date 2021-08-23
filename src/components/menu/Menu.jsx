import React from 'react'
import "./menu.scss";
export default function Menu({menuOpen,setMenuOpen,menuActive}) {
    console.log('Menu: '+menuActive);
    return (
        <div className={"menu "+ (menuOpen && "active")}>
            <ul>
                <li className={menuActive == 'intro' ? 'active': ''} onClick={()=>setMenuOpen(!menuOpen)}>
                    <a href="#intro">Home</a>
                </li>
                
                <li className={menuActive =='techSkills' ? 'active': ''} onClick={()=>setMenuOpen(!menuOpen)}>
                    <a href="#techSkills">Technical Skills</a>
                </li>
                
                <li className={menuActive =='works' ? 'active': ''} onClick={()=>setMenuOpen(!menuOpen)}>
                    <a href="#works">Works</a>
                </li>
                
                <li className={menuActive =='testimonials' ? 'active': ''}  onClick={()=>setMenuOpen(!menuOpen)}>
                    <a href="#testimonials">Testimonials</a>
                </li>

                <li className={menuActive =='contact' ? 'active': ''} onClick={()=>setMenuOpen(!menuOpen)}>
                    <a href="#contact">Contact</a>
                </li>

            </ul>
        </div>
    )
}
