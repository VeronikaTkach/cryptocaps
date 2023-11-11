import React, {Fragment, useState} from 'react';
import css from './header.module.scss';
import {Link, Route, Routes} from 'react-router-dom';
import {Authorization} from "../../pages/Authorization";




export const Header = ({authActive, setAuthActive}) => {

    const showAuthForm = () =>{
        setAuthActive(true)
    }

    return(
        <Fragment>
            <div className={css.header}>
                    <li className={css.logo}> logo </li>
                    <li className={css.h_menu_li}>
                        <Link className={css.link} to={'/'}>Token</Link>
                        <Link className={css.link} to={'/'}>Contacts</Link>
                        <Link className={css.link} to={'/'}>About</Link>
                        <div className={css.link}><Authorization/></div>
                        <button className={css.link}>How to start</button>
                        <button className={css.link}>Registration</button>
                    </li>
            </div>
        </Fragment>
    )

}