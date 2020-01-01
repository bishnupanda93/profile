import React from 'react';
import classes from './Header.module.scss';
const Header = (props)=>{
    return(
        <div className={[classes.header, 'row pb-4 px-5 pt-5'].join(" ")}>
            <div className="col-sm-8 col-12 d-flex flex-column-reverse">
            <h1>{props.personDetails.name}</h1>
            </div>
            <div className="col-sm-4 col-12">
                <ul>
                    <li>{props.personDetails.address} <i className="fa fa-home" aria-hidden="true"></i></li>
                    <li>{props.personDetails.phone} <i className="fa fa-phone"></i></li>
                    <li>{props.personDetails.email}<i className="fa fa-envelope"></i></li>
                    <li><a href={props.personDetails.linkedIn}>LinkedIn<i className="fa fa-linkedin"></i></a></li>
                </ul>
            </div>
        </div>
    )
}
export default Header;

