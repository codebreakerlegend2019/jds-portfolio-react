import React from 'react'
import "./menu.scss";
export default function Menu({menuOpen,setMenuOpen,menuActive,setMenuActive}) {
    return (
        <div className={"menu "+ (menuOpen && "active")}>
            <ul>
                <li className={menuActive == 'intro' ? 'active': ''} onClick={()=>{setMenuActive('');setMenuOpen(!menuOpen)}}>
                    <a href="#intro">Home</a>
                </li>
                
                <li className={menuActive =='techSkills' ? 'active': ''} onClick={()=>{setMenuActive('');setMenuOpen(!menuOpen)}}>
                    <a href="#techSkills">Technical Skills</a>
                </li>
                
                <li className={menuActive =='workexperiences' ? 'active': ''} onClick={()=>{setMenuActive('');setMenuOpen(!menuOpen)}}>
                    <a href="#works">Work Experiences</a>
                </li>
                
                {/* <li className={menuActive =='testimonials' ? 'active': ''}  onClick={()=>{setMenuActive('');setMenuOpen(!menuOpen)}}>
                    <a href="#testimonials">Testimonials</a>
                </li>

                <li className={menuActive =='contact' ? 'active': ''} onClick={()=>{setMenuActive('');setMenuOpen(!menuOpen)}}>
                    <a href="#contact">Contact</a>
                </li> */}
            </ul>
        </div>
    )
}
