import React, {Fragment, useState} from 'react';
import css from './header.module.scss';
import {Link} from 'react-router-dom';
import {Authorization} from "../Authorization";
import {Registration} from "../Registration";
import img4 from "../../assets/icons/button_sign_up_off.svg";
import img5 from "../../assets/icons/close.svg";
import img6 from '../../assets/icons/button_login_off_overlay.svg';


export const Header = () => {

    const [isOverlayVisible, setOverlayVisible] = useState(false);
    const [isAuthorizationVisible, setAuthorizationVisible] = useState(false);
    const [isRegistrationVisible, setRegistrationVisible] = useState(false);

    const openOverlay = () => {
        setOverlayVisible(true);
    };

    const closeOverlay = () => {
        setOverlayVisible(false);
        setAuthorizationVisible(false);
        setRegistrationVisible(false);
    }

    const showAuthorization = () => {
        openOverlay();
        setAuthorizationVisible(true);
        setRegistrationVisible(false);
    }

    const showRegistration = () => {
        openOverlay();
        setAuthorizationVisible(false);
        setRegistrationVisible(true);
    }

    return(
        <Fragment>
            {isOverlayVisible && (
                <div className={css.overlay}>
                    <div className={css.popup_down}>
                        <div className={css.frame}>
                            <div className={css.sign_in}>
                                <h2>Sign in now</h2>
                                <button onClick={showAuthorization} className={css.button_sign_in}>
                                    <img src={img6} alt={'button sign in'}/>
                                </button>
                                {/*<div className={`transition-container ${isAuthorizationVisible ? 'authorizationVisible' : ''}`}>*/}
                                {/*    {isAuthorizationVisible ? <Authorization /> : <Registration />}*/}
                                {/*</div>*/}
                            </div>
                            <div className={css.sign_up}>
                                <h2>Don't have an account?</h2>
                                <button onClick={showRegistration} className={css.button_sign_up}>
                                    <img src={img4} alt={'button sign up'}/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <Link className={css.close} onClick={closeOverlay} to={'/'}>
                        <img src={img5} alt={'close'}/>
                    </Link>
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

    // return(
    //     <Fragment>
    //         <div className={css.header}>
    //             <li className={css.logo}> logo </li>
    //             <li className={css.h_menu_li}>
    //                 <Link className={css.link} to={'/'}>Token</Link>
    //                 <Link className={css.link} to={'/'}>Contacts</Link>
    //                 <Link className={css.link} to={'/'}>About</Link>
    //                 <div className={css.link}><Authorization/></div>
    //                 <button className={css.link}>How to start</button>
    //                 <button className={css.link}><Registration/></button>
    //             </li>
    //         </div>
    //     </Fragment>
    // )

}