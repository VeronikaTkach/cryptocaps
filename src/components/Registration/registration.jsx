import React, {Fragment, useContext, useState} from 'react';
import {StoreContext} from '../../data/store';
import axios from 'axios';
// import {Link} from "react-router-dom";
import css from '../Registration/registration.module.scss';
import img6 from '../../assets/icons/button_sign_up_reg_off.svg';


export const Registration = () => {

    const registrationUrl = '/api/auth/sign_up'
    const {apiDomain} = useContext(StoreContext)

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [cryptoWallet, setCryptoWallet] = useState('')
    const [error, setError] = useState('')
    const [data, setData] = useState(null)

    const enterEmail = (e) => {
        setEmail(e.target.value)
    }

    const enterFirstName = (e) => {
        setFirstName(e.target.value)
    }

    const enterLastName = (e) => {
        setLastName(e.target.value)
    }

    const enterCryptoWallet = (e) => {
        setCryptoWallet(e.target.value)
    }

    const enterPassword = (e) => {
        setPassword(e.target.value)
    }

    const enterConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }

    const checkPasswords = (pass, confirmPass) => {
        if (pass === confirmPass){
            return true
        }
        else {
            return false
        }
    }

    const registrationRequest = (e) => {
        e.preventDefault()
        setError('')

        const data = {
            email,
            password,
            cryptoWallet
        }

        const passwordCheckResult = checkPasswords(password, confirmPassword)
        if (passwordCheckResult === false){
            setError('Пароли не совпадают')
            return
        }

        if (email === ""){
            setError('Введите email')
            return
        }

        if (password === ""){
            setError('Введите пароль')
            return
        }

        if (cryptoWallet === ""){
            setError('Введите номер криптокошелька')
            return
        }

        const headers = {
            'Content-Type': 'application/json'
        }

        axios.post(apiDomain + registrationUrl, data, headers)
            .then(res => {
                setData(res.data)
                setEmail('')
                setPassword('')
                setConfirmPassword('')
                setCryptoWallet('')
                console.log(res)
                console.log(res.data)
            })
            .catch(error => {
                console.log(error)
                setError(error.response.data.message)
            })
    }

    return(
        <div>
                <Fragment>
                    <div className={css.popup}>

                        <div className={css.header_reg}>
                            <h2 className={css.text_create}>Create an account</h2>
                            {/*<Link className={css.close} onClick={closeRegistration} to={'/'}>*/}
                            {/*    <img src={img5} alt={'close'}/>*/}
                            {/*</Link>*/}
                        </div>

                        <form onSubmit={registrationRequest} className={css.registration}>
                            <div className={css.reg_input}>
                                <h5 className={css.text_h5}>FIRST NAME</h5>
                                <input className={css.reg_input_input} type={'text'} value={firstName} onChange={enterFirstName}/>
                            </div>
                            <div className={css.reg_input}>
                                <h5 className={css.text_h5}>LAST NAME</h5>
                                <input className={css.reg_input_input} type={'text'} value={lastName} onChange={enterLastName}/>
                            </div>
                            <div className={css.reg_input}>
                                <h5 className={css.text_h5}>EMAIL</h5>
                                <input className={css.reg_input_input} type={'text'} value={email} onChange={enterEmail}/>
                            </div>
                            <div className={css.reg_input}>
                                <h5 className={css.text_h5}>PASSWORD</h5>
                                <input className={css.reg_input_input} type={'password'} value={password} onChange={enterPassword}/>
                            </div>
                            <div className={css.reg_input}>
                                <h5 className={css.text_h5}>CONFIRM PASSWORD</h5>
                                <input className={css.reg_input_input} type={'password'} value={confirmPassword} onChange={enterConfirmPassword}/>
                            </div>
                            <div className={css.reg_input}>
                                <h5 className={css.text_h5}>WALLET METAMASK</h5>
                                <input className={css.reg_input_input} type={'text'} value={cryptoWallet} onChange={enterCryptoWallet}/>
                            </div>
                            <label className={css.alarm}>{error}</label>
                            <div className={css.checkbox}>
                                <input className={css.checkbox_input} type={"checkbox"} onChange={''}/>
                                <h5 className={css.text_h5}>I ACCEPT THE THERMS OF USE</h5>
                            </div>
                            <a href={'/'}>
                                <img src={img6} alt={'sign_up_button'}/>
                            </a>
                        </form>
                    </div>
                </Fragment>
        </div>
    )
}