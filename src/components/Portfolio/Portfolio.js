import Title from './Title/Title.js'
import React from 'react';
import classes from './Portfolio.module.scss';
const Portfolio =(props)=>{
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
        </div>
    )

}
export default Portfolio;