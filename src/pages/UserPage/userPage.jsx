import React, {Fragment} from "react";
import css from './userPage.module.scss';
import {Link} from "react-router-dom";
import mascot_userpage from '../../assets/images/mascot_userpage.svg';

export const UserPage = () => {
    return (
        <Fragment>
            <div className={css.avatar}>
                <img src={mascot_userpage} alt={'MASCOT'}/>
                <Link to={'/'} className={css.text_mascot}>Edit photo </Link>
                <h5 className={css.text_mascot_h5}>@Mr.Drago</h5>
                <text className={css.text_mascot}>User429483</text>
                <div className={css.text_mascot}>Wallet</div>
            </div>
            <div className={css.userpage_back_up}></div>
            <div className={css.userpage_down}>
                <div className={css.userpage_btns}>
                    <Link className={css.link_text} to={'/mycaps'}>My caps</Link>
                    <Link className={css.link_text} to={'/gamingarena'}>Gaming arena</Link>
                    <Link className={css.link_text} to={'/achivements'}>Achievements</Link>
                    <Link className={css.link_text} to={'/history'}>History</Link>
                </div>
                <div className={css.user_area}>
                    <div>USER AREA</div>
                    <div>COMING SOON</div>
                </div>
            </div>
        </Fragment>
    )
}