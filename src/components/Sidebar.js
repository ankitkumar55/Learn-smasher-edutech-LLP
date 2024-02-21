import React from 'react';
import '../style.css';
import ImgIcon from "../assets/images/logo.png";

function Sidebar() {
    return (
        <div className="left-div">
            <br />
            <div className="logo">
                <img src={ImgIcon} alt="LearnSmasher logo" className="logo-img" />
            </div>
            <hr className="hr" />
            <ul className="nav">
                <li><a href=""><i className="fa fa-th-large"></i>LSE Dashboard</a></li>
                <li><a href=""><i className="fa fa-user"></i>LSE Learning</a></li>
                <li className="active"><a href=""><i className="fa fa-key"></i>LSE Projects</a></li>
                <li><a href=""><i className="fa fa-desktop"></i>LSE Add-ons</a></li>
                <li><a href=""><i className="fa fa-gear"></i>LSE Outcomes</a></li>
                <li><a href=""><i className="fa fa-bullhorn"></i>LSE Reviews</a></li>
                <li><a href=""><i className="fa fa-power-off"></i>LSE Links</a></li>
            </ul>
        </div>
    );
}

export default Sidebar;
