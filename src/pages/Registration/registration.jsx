import React, {useContext, useState} from 'react';
import './registration.module.scss';
import {StoreContext} from '../../components/data/store';
import axios from 'axios'


export const Registration = () => {

    const registrationUrl = '/api/auth/sign_up'

    const {apiDomain} = useContext(StoreContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')
    const [cryptoWallet, setCryptoWallet] = useState('')
    const [error, setError] = useState('')
    const [data, setData] = useState(null)


    const enterEmail = (e) => {
        setEmail(e.target.value)
    }

    const enterCryptoWallet = (e) => {
        setCryptoWallet(e.target.value)
    }

    const enterPassword = (e) => {
        setPassword(e.target.value)
    }

    const confirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }

    const checkPasswords = (pass, confirmpass) => {
        if (pass === confirmpass){
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

        const passwordCheckResult = checkPasswords(password, confirmpassword)
        if (passwordCheckResult === false){
            setError('Пароли не совпадают')
            return
        }

        if (email == ""){
            setError('Введите email')
            return
        }

        if (password == ""){
            setError('Введите пароль')
            return
        }

        if (cryptoWallet == ""){
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
        <>
            <h1 className='registration_title'>Регистрация</h1>
            <form onSubmit={registrationRequest} className='registration'>
                <input onChange={enterEmail} value={email} type="text" placeholder='Email' />
                <input onChange={enterCryptoWallet} value={cryptoWallet} type="text" placeholder='number of crypto wallet'/>
                <input onChange={enterPassword} value={password} type="password" placeholder='Password'/>
                <input onChange={confirmPassword} value={confirmpassword} type="password" placeholder='Confirm password' />

                <label className='alarm'>{error}</label>
                <button className='registration_button'>Registration</button>
            </form>
        </>
    )
}