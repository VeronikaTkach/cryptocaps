import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import { StoreContext } from '../../data/store';
// import axios from 'axios';
import css from './authorization.module.scss';
import img1 from '../../assets/icons/FrameBigNormal.svg';
import img2 from '../../assets/icons/discord.png';
import img3 from '../../assets/icons/twitter.png';

export const Authorization = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);

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
                <>
                    <div className={css.overlay} onClick={closePopup}></div>
                    <div className={css.popup}>
                        {/*<div className={css.sign_up}>*/}
                        {/*    /!* Здесь можно разместить форму для ввода данных авторизации *!/*/}
                        {/*    <h2>Don't have an account?</h2>*/}
                        {/*    <button onClick={closePopup}>Sign up</button>*/}
                        {/*</div>*/}
                        <div className={css.login}>
                            {/* Здесь можно разместить форму для ввода данных авторизации */}
                            <h2>Login to account</h2>
                            <input type="text" value={email} onChange={changeEmail} placeholder='USERNAME' />
                            <input type="password" value={password} onChange={changePass} placeholder='PASSWORD' />
                            <p className='alarm'> {errorMessage} </p>
                            {/*<button onClick={closePopup}>LOGIN</button>*/}
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
                </>
            )}

            {/*<div className={ isAuthActive ? 'authorization_window activate' : 'authorization_window' } onClick={hideAuthorization} >*/}
            {/*    <form onSubmit={authorizationRequest} className='authorization'>*/}
            {/*        <Link to='/registration' onClick={hideAuthorization} className='auth'>Registration</Link>*/}
            {/*        <input type="text" value={email} onChange={changeEmail} placeholder='Email' />*/}
            {/*        <input type="password" value={password} onChange={changePass} placeholder='Password' />*/}
            {/*        <p className='alarm'> {errorMessage} </p>*/}
            {/*        <button type='submit' className='authorization_button'>Sign in</button>*/}
            {/*    </form>*/}
            {/*</div>*/}
        </div>

    )
}