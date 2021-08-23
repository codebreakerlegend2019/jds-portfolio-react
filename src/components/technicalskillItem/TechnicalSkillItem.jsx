import React from 'react'
import "./technicalskillItem.scss"
export default function TechnicalSkillItem({technicalSkill,active,setSelected}) {
    return (
        <li id={technicalSkill.id} 
        className={active ? "technicalList active" : "technicalList"}
        onClick={() => setSelected(technicalSkill.id)}>
            {technicalSkill.title}
        </li>
    )
}
