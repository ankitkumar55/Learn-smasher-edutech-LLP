import React from 'react';
import '../style.css';
import ImgIcon from "../assets/images/profile.png";


function Bar() {
    return (
        <div className="right-div">
            <div id="main">
                <br />
                <button className="notification-icon"><i className="fa fa-bell"></i></button>
                <button className="chat-btn"><i className="fa"></i><strong>Chat with us</strong></button>
                <div className="head">
                    <div className="col-div-6">
                        <p className="nav"><strong>HOME</strong></p>
                    </div>
                    <div className="col-div-6">
                        <div className="profile">
                            <p><img src={ImgIcon} alt="User" width="32" /></p>
                            <div className="profile-div">
                                <p><i className="fa fa-user"></i>   Profile</p>
                                <p><i className="fa fa-cogs"></i>   Settings</p>
                                <p><i className="fa fa-power-off"></i>   Log Out</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bar;
