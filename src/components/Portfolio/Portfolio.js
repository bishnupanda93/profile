import Title from './Title/Title.js'
import React from 'react';
import classes from './Portfolio.module.scss';
import SubTitle from './SubTitle/SubTitle';
import Tenure from './Tenure/Tenure';
const Portfolio =(props)=>{
    const experience=  (
        props.experience.map(({role,organisation,tenureStart,tenureEnd,experienceDetail},index)=>(
            <div key={index}>
                <SubTitle organisation={organisation} role={role}></SubTitle>
                <Tenure startDate={tenureStart} endDate={tenureEnd}></Tenure>
                <ul>
                    {experienceDetail.map((expDetail,j) => <li key={j}>{expDetail}</li>)}
                </ul>
            </div>
            )))
    
    return(
        <div className={classes['portfolio-container']}>
            <div>
                <Title value="Summary" icon="fa fa-bars"></Title>
                <p className={classes['summary-text']}>{props.summary}</p>
            </div>
            <div>
                <Title value="Skills" icon="fa fa-wrench"></Title>
                <ul className="row">
                   { props.skills.map((skill,index)=>
                   (<li key={index} className="col-4">{skill}</li>))}
                </ul>
            </div>
            <div>
                <Title value="Experience" icon="fa fa-briefcase"></Title>
                <SubTitle organisation="Tata Consultancy Services" role="Frontend Developer"></SubTitle>
                <Tenure startDate="AUG 2015" endDate="PRESENT"></Tenure>
                <p>IT Analyst at TCS and following are accounts/clients’ projects that I have worked upon:</p>
                {experience}
            </div>
            <div>
                <Title value="Education" icon ="fa fa-university"></Title>
                <SubTitle organisation="University of Mumbai" role="Bachelor of Engineering"></SubTitle>
                <Tenure startDate="2011" endDate="2015"></Tenure>
            </div>
        </div>
    )

}
export default Portfolio;