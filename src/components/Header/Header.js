import React from 'react';
import classes from './Header.module.scss';
const Header = (props)=>{
    return(
        <div className={[classes.header, 'row pb-4 px-5 pt-5'].join(" ")}>
            <div className="col-8 d-flex flex-column-reverse">
            <h1>{props.personDetails.name}</h1>
            </div>
            <div className="col-4">
                <ul>
                    <li>{props.personDetails.address} <i class="fa fa-home" aria-hidden="true"></i></li>
                    <li>{props.personDetails.phone}</li>
                    <li>{props.personDetails.email}</li>
                    <li>{props.personDetails.linkedIn}></li>
                </ul>
            </div>
        </div>
    )
}
export default Header;

