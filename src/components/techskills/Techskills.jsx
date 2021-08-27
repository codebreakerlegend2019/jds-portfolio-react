import React, {useState, useEffect} from 'react'
import TechnicalSkillList from '../technicalskillItem/TechnicalSkillItem'
import "./techskills.scss"
import {technicalCategoryLists,
    backendSkills,
    mobileSkills,
    webSkills,
    cloudSkills,
    sourceControlSkills} 
from "../../technicalskillsData"

export default function TechSkills() {
    const [selected, setSelected] = useState('backend');
    const [data,setData] = useState([]);

    useEffect(() => {
        switch(selected){
            case "backend":
                setData(backendSkills);
                break;
            case "mobile":
                setData(mobileSkills);
                break;
            case "web":
                    setData(webSkills);
                break;
            case "cloud":
                setData(cloudSkills);
                break;
            case "sourceControl":
                setData(sourceControlSkills);
                break;
            default:
                setData(backendSkills)
        }
    }, [selected])
    return (
        <div id="techSkills" className="techSkills">
            <h1>Technical Skills</h1>
            <ul>
                {technicalCategoryLists.map(technicalSkill =>(
                     <TechnicalSkillList technicalSkill={technicalSkill} 
                     key={technicalSkill.key}
                     active= {selected === technicalSkill.id} 
                     setSelected={setSelected}  />
                ))}
            </ul>
            <div className="container">
                {data.map((d)=>(
                    
                <div className="item"
                key={d.key}>
                    <img src={d.imgUrl}/>
                    <h3>{d.title}</h3>
                </div>
                
                ))}
            </div>

        </div>
    )
}
