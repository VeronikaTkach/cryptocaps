import React, {Fragment, useState} from 'react';
import css from './header.module.scss';
import {Link} from 'react-router-dom';
import { CSSTransition} from "react-transition-group";
import {Authorization} from "../Authorization";
import {Registration} from "../Registration";
import img5 from "../../assets/icons/closePink.svg";
import {BorderButton} from "../Buttons";
import {ForgotPassword} from "../ChangePassword/forgotPassword";


export const Header = () => {

    const [isOverlayVisible, setOverlayVisible] = useState(false);
    const [isAuthorizationVisible, setAuthorizationVisible] = useState(false);
    const [isRegistrationVisible, setRegistrationVisible] = useState(false);
    const [isCloseVisible, setCloseVisible] = useState(false);
    const [isForgotPassVisible, setForgotPassVisible] = useState(false);

    const openOverlay = () => {
        setOverlayVisible(true);
    };

    const buttonClose = () => {
        setCloseVisible(true);
    }

    const openForgotPass = () => {
        setForgotPassVisible(true);
    }

    const closeOverlay = () => {
        setOverlayVisible(false);
        setCloseVisible(false);
        setAuthorizationVisible(false);
        setRegistrationVisible(false);
        setForgotPassVisible(false);
    }

    // // Функция для задержки появления компонента
    // const delayComponent = (delay) => {
    //     return new Promise(resolve => {
    //         setTimeout(() => {
    //             resolve();
    //         }, delay);
    //     });
    // };
    //
    // const showDelayedAuthorization = async () => {
    //     // Если компонент уже видим, выходим из функции
    //     if (isAuthorizationVisible) {
    //         return;
    //     }
    //
    //     // Задержка в 2000 миллисекунд (2 секунды)
    //     const delay = 2000;
    //
    //     // Вызываем функцию задержки
    //     delayComponent(delay).then(() => {
    //         // Устанавливаем видимость компонента в true
    //         setAuthorizationVisible(true);
    //     })
    // };
    //
    // const showDelayedRegistration = async () => {
    //     // Если компонент уже видим, выходим из функции
    //     if (isRegistrationVisible) {
    //         return;
    //     }
    //
    //     // Задержка в 2000 миллисекунд (2 секунды)
    //     const delay = 2000;
    //
    //     // Вызываем функцию задержки
    //    delayComponent(delay).then(() => {
    //         // Устанавливаем видимость компонента в true
    //         setRegistrationVisible(true);
    //     });
    // };

    const showAuthorization = () => {
        openOverlay();
        buttonClose();
        setAuthorizationVisible(true);
        setRegistrationVisible(false);
        setForgotPassVisible(false);
    }

    const showRegistration = () => {
        openOverlay();
        buttonClose();
        setAuthorizationVisible(false);
        setRegistrationVisible(true);
        setForgotPassVisible(false);
    }

    const showForgotPass = () => {
        openOverlay();
        buttonClose();
        setAuthorizationVisible(false);
        setRegistrationVisible(false);
        openForgotPass();
    }

    return(
        <Fragment>
            {isOverlayVisible && (
                <div className={css.overlay}>
                    <div className={css.popup_down}>
                        <div className={css.frame}>
                            {isRegistrationVisible && (
                                <div className={css.sign_in}>
                                    <h2>Don’t have an account?</h2>
                                    <BorderButton className={css.btn_sign_in} btnCaption={'Login'} onClickHandler={showAuthorization}/>
                                </div>
                            )}
                            {isAuthorizationVisible && (
                                <div className={css.sign_up}>
                                    <h2>Do you have an account?</h2>
                                    <BorderButton className={css.btn_sign_up} btnCaption={'Sign up'} onClickHandler={showRegistration}/>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
            {isAuthorizationVisible && (
                    <Authorization showForgotPassHandler={showForgotPass}/>
            )}

            {isRegistrationVisible && (
                    <Registration/>
            )}
            {isCloseVisible && (
                <Link className={css.close} onClick={closeOverlay} to={'/'}>
                    <img src={img5} alt={'close'}/>
                </Link>
            )}
            {isForgotPassVisible && (
                    <ForgotPassword/>
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