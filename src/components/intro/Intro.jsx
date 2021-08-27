import {useEffect,useRef} from 'react'
import "./intro.scss"
import { init  } from 'ityped';


export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current,{
            showCursor:true,
            backDelay:2500,
            backSpeed:60,
            strings:["Asp.Net Web API","C#","Xamarin/Xaml","Azure","React"]


        })
    }, []);
    return (
        <div id="intro" className="intro">
            <div className="left">
                <div className="imageContainer">
                    <img src="assets/intro-image.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Joshua D. Siuagan</h1>
                    <h3>Software Engineer: <span ref={textRef}></span></h3>
                </div>
                <a href="#techSkills">
                    <img src="assets/down.png"/>
                </a>
            </div>
        </div>
    )
}
