import React, {Fragment, useState} from 'react';
import css from './header.module.scss';
import {Link} from 'react-router-dom';
import {Authorization} from "../Authorization";
import {Registration} from "../Registration";
import img4 from "../../assets/icons/button_sign_up_off.svg";
import img5 from "../../assets/icons/closePink.svg";
import img6 from '../../assets/icons/button_login_off_overlay.svg';
import {NewButton} from "../Buttons";


export const Header = () => {

    const [isOverlayVisible, setOverlayVisible] = useState(false);
    const [isAuthorizationVisible, setAuthorizationVisible] = useState(false);
    const [isRegistrationVisible, setRegistrationVisible] = useState(false);
    const [isCloseVisible, setCloseVisible] = useState(false);

    const openOverlay = () => {
        setOverlayVisible(true);
    };

    const buttonClose = () => {
        setCloseVisible(true);
    }

    const closeOverlay = () => {
        setOverlayVisible(false);
        setCloseVisible(false);
        setAuthorizationVisible(false);
        setRegistrationVisible(false);
    }

    const showAuthorization = () => {
        openOverlay();
        buttonClose();
        setAuthorizationVisible(true);
        setRegistrationVisible(false);
    }

    const showRegistration = () => {
        openOverlay();
        buttonClose();
        setAuthorizationVisible(false);
        setRegistrationVisible(true);
    }

    return(
        <Fragment>
            {isOverlayVisible && (
                <div className={css.overlay}>
                    <div className={css.popup_down}>
                        <div className={css.frame}>
                            {isRegistrationVisible && (
                                <div className={css.sign_in}>
                                    <h2>Sign in now</h2>
                                    <NewButton className={css.btn_sign_in} btnCaption={'Sign in'} onClickHandler={showAuthorization}/>
                                </div>
                            )}
                            {isAuthorizationVisible && (
                                <div className={css.sign_up}>
                                    <h2>Don't have an account?</h2>
                                    <NewButton className={css.btn_sign_up} btnCaption={'Sign up'} onClickHandler={showRegistration}/>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
            {isAuthorizationVisible && (
                <div className={css.transition}>
                    <Authorization/>
                </div>
            )}

            {isRegistrationVisible && (
                <div className={css.transition}>
                    <Registration/>
                </div>
            )}
            {isCloseVisible && (
                <Link className={css.close} onClick={closeOverlay} to={'/'}>
                    <img src={img5} alt={'close'}/>
                </Link>
            )}
            <div className={css.header}>
                    <li className={css.logo}> logo </li>
                    <li className={css.h_menu_li}>
                        <Link className={css.link} to={'/'}>Token</Link>
                        <Link className={css.link} to={'/'}>Contacts</Link>
                        <Link className={css.link} to={'/'}>About</Link>
                        <Link className={css.link} onClick={showAuthorization} to={'/'}>Login</Link>

                        <button className={css.link}>How to start</button>

                        <button className={css.link} onClick={showRegistration}>Registration</button>
                    </li>
            </div>
        </Fragment>
    )
}