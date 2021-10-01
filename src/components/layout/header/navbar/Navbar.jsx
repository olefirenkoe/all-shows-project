import React, {useContext} from 'react';
import logo from '../../../../assets/logo.svg'
import './Navbar.css'
import {NavLink} from "react-router-dom";
import {
    HOME_ROUTE,
    PROFILE_ROUTE,
    SHOWS_ROUTE, SIGN_ROUTE,
} from "../../../../utils/consts";
import {Context} from "../../../../index";
import {useAuthState} from "react-firebase-hooks/auth";

const Navbar = () => {
    const {auth} = useContext(Context);
    const [user] = useAuthState(auth);

    return (
        <div className="navbar">
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
                        <NavLink to={SHOWS_ROUTE} className="menu-list__item">Shows</NavLink>
                        {user && <NavLink to={PROFILE_ROUTE} className="menu-list__item">Profile</NavLink>}
                    </nav>
                </div>
                <div className="navbar__box navbar__box--actions">
                    {user ?
                        <div className="navbar__actions navbar__actions--user">
                            <div className="navbar__user-container user-container">
                                <div className="user-container__box user-container__box--avatar">
                                    <NavLink to={PROFILE_ROUTE}>
                                        <img className="user-container__avatar"
                                             src={user.multiFactor.user.photoURL}
                                             alt="avatar"/>
                                    </NavLink>
                                </div>
                                <div className="user-container__box user-container__box--button">
                                    <button
                                        onClick={() => auth.signOut()}
                                        className="navbar__button button"
                                        type="button"
                                    >
                                        Log out
                                    </button>
                                </div>

                            </div>
                        </div>
                        :
                        <NavLink to={SIGN_ROUTE}>
                            <button className="navbar__button button" type="button">Log in</button>
                        </NavLink>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;