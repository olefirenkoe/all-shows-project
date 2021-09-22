import React from 'react';
import logo from '../../../../assets/logo.svg'
import './Navbar.css'
import {NavLink} from "react-router-dom";
import {
    EPISODES_ROUTE,
    HOME_ROUTE,
    PEOPLE_ROUTE,
    SCHEDULE_ROUTE,
    SHOWS_ROUTE, SIGN_ROUTE,
} from "../../../../utils/consts";

const Navbar = () => {
    const user = false;

    return (
        <div class="navbar">
            <div className="navbar__wrapper wrapper">
                <div className="navbar__box navbar__box--logo">
                    <div className="navbar__logo">
                        <NavLink to={HOME_ROUTE}>
                            <img src={logo} alt="logo" className="logo"/>
                        </NavLink>
                    </div>
                </div>
                <div className="navbar__box navbar__box--list">
                    <nav className="navbar__list menu-list">
                        <NavLink to={HOME_ROUTE} className="menu-list__item">Home</NavLink>
                        <NavLink to={SCHEDULE_ROUTE} className="menu-list__item">Schedule</NavLink>
                        <NavLink to={SHOWS_ROUTE} className="menu-list__item">Shows</NavLink>
                        <NavLink to={EPISODES_ROUTE} className="menu-list__item">Episodes</NavLink>
                        <NavLink to={PEOPLE_ROUTE} className="menu-list__item">People</NavLink>
                    </nav>
                </div>
                <div className="navbar__box navbar__box--actions">
                    <div className="navbar__actions navbar__actions--button">
                        {user ?
                            <button className="navbar__button button" type="button">Log out</button>
                        :
                            <NavLink to={SIGN_ROUTE} className="menu-list__item">
                                <button className="navbar__button button" type="button">Log in</button>
                            </NavLink>
                            }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;