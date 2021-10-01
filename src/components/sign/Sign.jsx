import React, {useContext} from 'react';
import './Sign.css'
import {HOME_ROUTE} from "../../utils/consts";
import logo from "../../assets/logo.svg";
import {NavLink} from "react-router-dom";
import {Context} from "../../index";
import firebase from "firebase/compat";

const Sign = () => {
    const {auth} = useContext(Context);
    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        const {user} = await auth.signInWithPopup(provider);
    }
    return (
        <div className="login">
            <div className="login__wrapper">
                <div className="login__box login__box--logo">
                    <NavLink to={HOME_ROUTE}>
                        <img src={logo} alt="logo" className="logo login__logo"/>
                    </NavLink>
                </div>
                <div className="login__box login__box--button">
                    <button
                        onClick={login}
                        className="login__button"
                        type="button"
                    >Sign In with Google
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Sign;