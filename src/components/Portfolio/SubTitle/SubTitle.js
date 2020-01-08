import classes from './SubTitle.module.scss'
import React from 'react';
const SubTitle =props=>(
    <p className={classes['subtitle-wrapper']}>
        <span className= {classes['bold-green-text']}>{props.role}</span>&nbsp;|&nbsp;<span className={classes['muted-grey-text']}>{props.organisation}</span>
    </p>
)
export default SubTitle;