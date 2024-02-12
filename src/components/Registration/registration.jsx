import React, {Fragment, useContext, useState} from 'react';
import {StoreContext} from '../../data/store';
import axios from 'axios';
// import {Link} from "react-router-dom";
import css from './registration.module.scss';
import img6 from '../../assets/icons/button_sign_up_reg_off.svg';
import PinkCheckbox from "../ui/Checkbox/checkbox";
import {NewButton} from "../ui/Buttons";


export const Registration = () => {

    const registrationUrl = '/api/auth/sign_up'
    const {apiDomain} = useContext(StoreContext)

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [data, setData] = useState(null)


    const checkValidEmail = (emailString) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(emailString);
    }

    const enterEmail = (e) => {
        setError('')
        const emailString = e.target.value;

        if (!checkValidEmail(emailString)) {
            setError("Enter correct e-mail")
        }

        setEmail(emailString)
    }

    const enterFullName = (e) => {
        setFullName(e.target.value)
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
            password
        }

        const passwordCheckResult = checkPasswords(password, confirmPassword)
        if (passwordCheckResult === false){
            setError('Confirm password not match')
            return
        }

        if (email === ""){
            setError('Enter email')
            return
        }

        if (password === ""){
            setError('Enter password')
            return
        }

        const headers = {
            'Content-Type': 'application/json'
        }

        // Проверка доступности email

        function checkEmailAvailability() {
            // Получаем значение email
            const email = document.getElementById('email').value;

            // Проверяем, что email не пустой
            if (email.trim() !== '') {
                // Отправляем запрос с использованием Axios
                axios.post('check_email_availability.php', { email: email })
                    .then(function (response) {
                        // Обрабатываем ответ от сервера
                        if (response.data === 'available') {
                            document.getElementById('availability-message').innerHTML = 'Email is available.';
                        } else {
                            document.getElementById('availability-message').innerHTML = 'Email is already registered.';
                        }
                    })
                    .catch(function (error) {
                        setError('This email is already registered');
                        return
                    });
            }
        }



        axios.post(apiDomain + registrationUrl, data, headers)
            .then(res => {
                setData(res.data)
                setEmail('')
                setPassword('')
                setConfirmPassword('')
                console.log(res)
                console.log(res.data)
            })
            .catch(error => {
                console.log(error)
                setError(error.response.data.message)
            })
    }

    const handlerClick = () => {
        return
    }

    return(
                <Fragment>
                    <div className={css.popup}>
                        <div className={css.reg}>
                            <div className={css.header_reg}>
                                <h2>Create an account</h2>
                            </div>
                            <form onSubmit={registrationRequest} className={css.registration}>
                                <div className={css.reg_input}>
                                    <h5 className={css.text_h5}>YOUR FULL NAME</h5>
                                    <input className={css.reg_input_input} type={'text'} value={fullName} onChange={enterFullName}/>
                                </div>
                                <div className={css.reg_input}>
                                    <h5 className={css.text_h5}>EMAIL</h5>
                                    <input className={css.reg_input_input} type={'email'} value={email} onChange={enterEmail}/>
                                </div>
                                <div className={css.reg_input}>
                                    <h5 className={css.text_h5}>PASSWORD</h5>
                                    <input className={css.reg_input_input} type={'password'} value={password} onChange={enterPassword}/>
                                </div>
                                <div className={css.reg_input}>
                                    <h5 className={css.text_h5}>RE-ENTER PASSWORD</h5>
                                    <input className={css.reg_input_input} type={'password'} value={confirmPassword} onChange={enterConfirmPassword}/>
                                </div>
                                <label className={css.alarm}>{error}</label>
                            </form>
                            <div className={css.checkbox}>
                                <PinkCheckbox label={'I accept the therms of USE '}/>
                            </div>
                            <NewButton className={css.btn_sign_up} btnCaption={'Sign up'} onClickHandler={handlerClick}/>
                        </div>
                    </div>
                </Fragment>
    )
}