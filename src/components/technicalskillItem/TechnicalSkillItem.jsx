import React from 'react'
import "./technicalskillItem.scss"
export default function TechnicalSkillItem({technicalSkill,active,setSelected,key}) {
    return (
        <li id={technicalSkill.id}
        key={key} 
        className={active ? "technicalList active" : "technicalList"}
        onClick={() => setSelected(technicalSkill.id)}>
            {technicalSkill.title}
        </li>
    )
}
