import React from 'react'
import "./workexperiences.scss"
import {ReactComponent as WorkIcon} from "../../assets/work.svg";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import '../../vertical-component.css';
import '../../vertical-component-element.css';
import {workexperiences} 
from "../../workexperienceData"

export default function WorkExperiences() {
    let workIconStyles= {background:"#f52955"};
    return (
        <div id="works" className="workexperiences">    
              <h1>Work Experiences</h1>
              <VerticalTimeline>
                     {
                        workexperiences.map((element)=>{
                         return(
                             <VerticalTimelineElement
                             key={element.key}
                             date={element.date} 
                             contentStyle={{ background: '#e76a47', color: '#fff' }}
                             contentArrowStyle={{ borderRight: '7px solid  #e76a47' }}
                             iconStyle={workIconStyles}
                             icon={<WorkIcon/>}>
                            <h3 className="vertical-timeline-element-title">{element.title}</h3>
                            <h5 className="vertical-timeline-element-subtitle">{element.companyName}</h5>
                            <h5 className="vertical-timeline-element-subtitle">{element.location}</h5>
                            <p id='description'>{element.decription}</p>
                             </VerticalTimelineElement>
                         );
                     })}
              </VerticalTimeline>
        </div>
    )
}
