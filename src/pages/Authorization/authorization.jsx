import React, {Fragment, useContext, useState} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import { StoreContext } from '../../data/store';
// import axios from 'axios';
import css from './authorization.module.scss';
import img1 from '../../assets/icons/button_login_off.svg';
import img2 from '../../assets/icons/discord.png';
import img3 from '../../assets/icons/twitter.png';
import img4 from '../../assets/icons/button_sign_up_off.svg';
import img5 from '../../assets/icons/close.svg';
import {Registration} from "../Registration";

export const Authorization = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [isRegistrationVisible, setRegistrationVisible] = useState(false);

    const authorizationUrl = '/api/auth/sign_in'
    const {apiDomain} = useContext(StoreContext)

    const {setIsLoggedIn} = useContext(StoreContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const openPopup = () => {
        setPopupVisible(true);
    };

    const closePopup = () => {
        setPopupVisible(false);
    };

    // const stop = (e) => {
    //     e.stopPropagation()
    // }

    const changeEmail = (e) => {
        setErrorMessage('')

        if (!isValidEmail(e)) {
            setErrorMessage("Enter correct e-mail")
        }
        setEmail(e.target.value)
    }

    const changePass = (e) => {
        setPassword(e.target.value)
    }

    // const authorizationRequest = (e) => {
    //     e.preventDefault()
    //     setErrorMessage('')
    //
    //     if(email == ""){
    //         setErrorMessage("Введите e-mail")
    //         return
    //     }
    //
    //     if (password == ""){
    //         setErrorMessage("Введите пароль")
    //         return
    //     }
    //
    //     const data = {
    //         email, password
    //     }
    //
    //     const headers = {
    //         'Content-Type': 'application/json'
    //     }
    //
    //     axios.post(apiDomain + authorizationUrl, data, headers)
    //         .then(res => {
    //             setEmail('')
    //             setPassword('')
    //             hideAuthorization()
    //             setIsLoggedIn(true)
    //             console.log(res)
    //             console.log(res.data)
    //             localStorage.setItem('token', res.data.data.token)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //             setErrorMessage(err.response.data.message)
    //             setEmail('')
    //             setPassword('')
    //         })
    //
    // }

    const isValidEmail = (e) => {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(e);
    }

    return(
        <div>
            <Link onClick={openPopup} to={'/'}>Login</Link>

            {isPopupVisible && (
                <Fragment>
                    <div className={css.overlay}></div>
                    <div className={css.popup_down}>
                        <div className={css.frame}>
                            <div className={css.sign_up}>
                                <h2>Don't have an account?</h2>
                                {/*<Link onClick={() => {*/}
                                {/*    // Действие 1*/}
                                {/*    closePopup();*/}
                                {/*    // Действие 2*/}
                                {/*    openRegistration();*/}
                                {/*}} to={'/'}>*/}
                                {/*    <img src={img4} alt={'sign_up_button'}/>*/}
                                {/*</Link>*/}

                                {/*<div className={css.btn}>*/}
                                {/*    <Link className={css.button_sign_up} onClick={closePopup} to={'/'}>*/}
                                {/*        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="40" viewBox="0 0 120 40" fill="none">*/}
                                {/*            <path d="M119 39H1V13.0131L8.69413 7.4891L18.4278 1H119V10.4167V39Z" stroke="#F30096" stroke-width="2"/>*/}
                                {/*        </svg>*/}
                                {/*    </Link>*/}
                                {/*</div>*/}


                                {/*<Link className={css.btn_sign_up} onClick={closePopup} to={'/'}>*/}
                                {/*    Sign up*/}
                                {/*</Link>*/}

                                <button onClick={closePopup} className={css.button_sign_up}>
                                    <img src={img4} alt={'button sign up'}/>
                                </button>

                            </div>
                        </div>
                    </div>
                    <Link className={css.close} onClick={closePopup} to={'/'}>
                        <img src={img5} alt={'close'}/>
                    </Link>
                    <div className={css.popup_up}>
                        <div className={css.login}>
                            <h2>Log in to account</h2>
                            <input className={css.input_auth} type={'text'} value={email} onChange={changeEmail} placeholder='EMAIL' />
                            <input className={css.input_auth} type={'text'} value={password} onChange={changePass} placeholder='PASSWORD' />
                            <p className='alarm'> {errorMessage} </p>
                            <a onClick={closePopup} href={'/'}>
                                <img src={img1} alt={'login_button'}/>
                            </a>
                            <h3>Forgot password or username. <Link to={'/'}>CLICK HERE</Link></h3>
                            <div className={css.sign_in_with}>
                                <h4>Sign in with</h4>
                                <div className={css.social_media}>
                                    <a onClick={closePopup} href={'/'}>
                                        <img src={img2} alt={'login_discord'}/>
                                    </a>
                                    <a onClick={closePopup} href={'/'}>
                                        <img src={img3} alt={'login_twitter'}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )}
        </div>

    )
}