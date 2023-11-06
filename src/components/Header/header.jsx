import React, { Fragment } from 'react';
import './header.module.scss';
import { Link } from 'react-router-dom';


export const Header = () => {


    return(
        <Fragment>
            <div className={'header'}>
                <ul className={'header_menu'}>
                    <li>
                        <Link className={'link'} to={'/'}>Главная</Link>
                        <Link className={'link'} to={'/'}>Задания</Link>
                        
                    </li>
                </ul>
            </div>
        </Fragment>
    )

}