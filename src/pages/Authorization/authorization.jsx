import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import { StoreContext } from '../../components/data/store';
import axios from 'axios';
import './authorization.module.scss';

export const Authorization = ({isAuthActive, setAuthActive}) => {

    const authorizationUrl = '/api/auth/sign_in'
    const {apiDomain} = useContext(StoreContext)

    const {setIsLoggedIn} = useContext(StoreContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const hideAuthorization = () => {
        setAuthActive(false)
    }

    const stop = (e) => {
        e.stopPropagation()
    }

    const changeEmail = (e) => {
        setEmail(e.target.value)
    }

    const changePass = (e) => {
        setPassword(e.target.value)
    }

    const authorizationRequest = (e) => {
        e.preventDefault()
        setErrorMessage('')

        if(email == ""){
            setErrorMessage("Введите e-mail")
            return
        }

        if (password == ""){
            setErrorMessage("Введите пароль")
            return
        }

        const data = {
            email, password
        }

        const headers = {
            'Content-Type': 'application/json'
        }

        axios.post(apiDomain + authorizationUrl, data, headers)
            .then(res => {
                setEmail('')
                setPassword('')
                hideAuthorization()
                setIsLoggedIn(true)
                console.log(res)
                console.log(res.data)
                localStorage.setItem('token', res.data.data.token)
            })
            .catch(err => {
                console.log(err)
                setErrorMessage(err.response.data.message)
                setEmail('')
                setPassword('')
            })
    }

    return(
        <div className={ isAuthActive ? 'authorization_window activate' : 'authorization_window' } onClick={hideAuthorization} >
            <form onSubmit={authorizationRequest} className='authorization' onClick={stop}>
                <Link to='/registration' onClick={hideAuthorization} className='auth'>Registration</Link>
                <input type="text" value={email} onChange={changeEmail} placeholder='Email' />
                <input type="password" value={password} onChange={changePass} placeholder='Password' />
                <p className='alarm'> {errorMessage} </p>
                <button type='submit' className='authorization_button'>Sign in</button>
            </form>
        </div>
    )
}