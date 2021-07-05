import React, { useState } from 'react';
import { Link } from "react-router-dom";

import user from './images/user.png';
import arrowDown from './images/arrow-down.png';

const Header = () => {
    const [isMenuClick, setMenuClick] = useState(false);
    const handleClick = () => {
        setMenuClick(!isMenuClick);
    };

    return (
        <div className="header-top">
            <div className="header container">
                <Link to="/">
                    <h1 className="header-title">Awesome Kanban Board</h1>
                </Link>
                <div className="Menu" onClick={handleClick}>
                    <div className="UserMenu">
                        <img
                            className="user"
                            src={user}
                            alt="avatar"
                        />
                            <img className={
                                isMenuClick
                                ? "user-menu-arrow"
                                : "user-menu-arrow-down"
                            }
                            src={arrowDown}
                            alt="vector"
                            />
                    </div>
                    {isMenuClick && (
                          <div className="UserMenuArrow">
                          <ul className="UserMenuBlock">
                              <li className="UserMenuBlockList">My Profile</li>
                              <li className="UserMenuBlockList">My Tasks</li>
                              <li className="UserMenuBlockList">Log Out</li>
                          </ul>
                          </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default Header;

