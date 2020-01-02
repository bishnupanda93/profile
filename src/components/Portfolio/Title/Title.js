import React from 'react';
import classes from './Title.module.scss';
const Title = (props)=>{
    const iconClass = [classes.iconClass,props.icon];
    const titleClass = [classes['title-style'],'col pl-0'].join(" ");
    return(
        <div className="row">
            <div className="col-auto">
                <i className={iconClass.join(' ')}></i>
            </div>
            <div className={titleClass}><h5 className="text-uppercase">{props.value}</h5></div>
        </div>
    )
}
export default Title;