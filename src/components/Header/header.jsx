import React, {Fragment, useState} from 'react';
import css from '../../styles/header.module.scss';
import {Link, useNavigate} from 'react-router-dom';
import {Authorization} from "../Authorization";
import {Registration} from "../Registration";
import img5 from "../../assets/icons/closePink.svg";
import {BigBorderButton, BorderButton, NewButton} from "../ui/Buttons";
import {ForgotPassword} from "../ChangePassword/forgotPassword";
import img_logo from "../../assets/images/logo 1.svg";
import {LangSelect} from "../ui/LangSelect";
import { scroller } from 'react-scroll';


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

    const navigate = useNavigate();
    const showUserPageHandler = () => {
        closeOverlay();
        navigate('/userpage');
    }

    const showWeb3 = () => {
        closeOverlay();
        navigate('/begginers');
    }

    const scrollToComponent = (elementName) => {
        scroller.scrollTo(elementName, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
        })
    }

    return(
        <Fragment>
            {isOverlayVisible && (
                <div className={css.overlay}>
                    <div className={css.popup_down}>
                        <div className={css.frame}>
                            {isRegistrationVisible && (
                                <div className={css.sign_in}>
                                    <h2>Do you have an account?</h2>
                                    <BorderButton className={css.btn_sign_in} btnCaption={'Login'} onClickHandler={showAuthorization}/>
                                </div>
                            )}
                            {isAuthorizationVisible && (
                                <div className={css.sign_up}>
                                    <h2>Don't have an account?</h2>
                                    <BorderButton className={css.btn_sign_up} btnCaption={'Sign up'} onClickHandler={showRegistration}/>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
            {isAuthorizationVisible && (
                    <Authorization showForgotPassHandler={showForgotPass} showUserPageHandler={showUserPageHandler}/>
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
            <div className={css.background_header}>
                <svg className={css.header_svg} xmlns="http://www.w3.org/2000/svg" width="1920" height="102" viewBox="0 0 1920 102" fill="none">
                    <path d="M-23 32C-23 9.9086 -5.09139 -8 17 -8H1902C1924.09 -8 1942 9.90862 1942 32V39.0617C1942 52.8905 1934.86 65.7383 1923.11 73.0369L1886.2 95.9752C1879.86 99.9131 1872.55 102 1865.08 102L47.2408 102C39.0712 102 31.0976 99.4985 24.392 94.8318L-5.84888 73.7861C-16.5941 66.3081 -23 54.0454 -23 40.9543V32Z" fill="#F0DBFF"/>
                </svg>
                <div className={css.header_overlay}>
                    <div className={css.header}>
                        <div className={css.header_links}>
                            <li className={css.logo}>
                                <img src={img_logo} alt={'logo'}/>
                            </li>
                            <li className={css.h_menu_li}>
                                {/*<Link className={css.link_header} to={'/#main'}>About us</Link>*/}
                                <Link to={'main'} smooth={true} onClick={() => scrollToComponent('main')} className={css.link_header}>About us</Link>
                                <Link className={css.link_header} to={'/'}>Community</Link>
                                <Link to={'news'} smooth={true} onClick={() => scrollToComponent('news')} className={css.link_header}>News</Link>
                            </li>
                        </div>
                        <div className={css.header_btns}>
                            <div className={css.link_header}>
                                <BigBorderButton btnCaption={'What is the web3?'} onClickHandler={showWeb3}/>
                            </div>
                            <div className={css.link_header}>
                                <NewButton btnCaption={'Login'} onClickHandler={showAuthorization}/>
                            </div>
                            <div className={css.link_header}>
                                <LangSelect/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}