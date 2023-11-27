import React, {Fragment, useState} from "react";
import css from './forgotPassword.module.scss'
import {Link} from "react-router-dom";
import {NewButton} from "../Buttons";
import img_mascot from '../../assets/images/mascotForgotPass.svg';
import img_vector from '../../assets/images/Vector.svg'
import img5 from "../../assets/icons/closePink.svg";

// const handlerClickFirst = () => {
//     return
// }
export const ForgotPassword = () => {

    const [isEnterEmailVisible, setEnterEmailVisible] = useState(true);
    const [isVerCodeVisible, setVerCodeVisible] = useState(false);
    const [isNewPassVisible, setNewPassVisible] = useState(false);

    const openEnterEmail = () => {
        setEnterEmailVisible(true);
    }

    const openVerCode = () => {
        setVerCodeVisible(true);
    }

    const openNewPass = () => {
        setNewPassVisible(true);
    }

    const showEnterEmail = () => {
        openEnterEmail();
        setVerCodeVisible(false);
        setNewPassVisible(false);
    }

    const showVerCode = () => {
        setEnterEmailVisible(false);
        openVerCode();
        setNewPassVisible(false);
    }

    const showNewPass = () => {
        setEnterEmailVisible(false);
        setVerCodeVisible(false);
        openNewPass();
    }

    return(
        <Fragment>
            {isEnterEmailVisible && (
                <div className={css.box_forgot}>
                    <div className={css.container_forgot_pass}>
                        <div className={css.popup_forgot_pass}>
                            <div className={css.first_forgot_win}>
                                <div className={css.ch_forgot_header}>
                                    <Link to={'/'} className={css.button_return}>
                                        <img src={img_vector} alt={'arrow back'}/>
                                    </Link>
                                    <text>Forgot your password</text>
                                </div>
                                <div className={css.form_forgot_pass}>
                                    <text>Please enter your email address to request a password reset</text>
                                    <div className={css.form_forgot_pass_row}>
                                        <text>Email address</text>
                                        <input/>
                                    </div>
                                </div>
                                <div className={css.btn_next}>
                                    <NewButton btnCaption={'Next'} onClickHandler={showVerCode}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={css.mascot_forgot_pass}>
                        <img src={img_mascot} alt={'mascot'}/>
                    </div>
                </div>
            )}
            {isVerCodeVisible && (
                <div className={css.popup_forgot_pass}>
                    <div className={css.ch_forgot_header}>
                        <Link to={'/'} className={css.button_return} onClick={showEnterEmail}/>
                        <text>Forgot your password</text>
                    </div>
                    <text>Please enter your the Verification code</text>
                    <text>We have sent the verification code to your email</text>
                    <div className={css.ver_code}>
                        <input/>
                        <input/>
                        <input/>
                        <input/>
                    </div>
                    <NewButton btnCaption={'Done'} onClickHandler={showNewPass}/>
                    <div className={css.mascot_forgot_pass}>
                        <img src={img_mascot} alt={'mascot'}/>
                    </div>
                </div>
            )}
            {isNewPassVisible && (
                <div className={css.popup_forgot_pass}>
                    <div className={css.ch_forgot_header}>
                        <Link to={'/'} className={css.button_return} onClick={showVerCode}/>
                        <text>Forgot your password</text>
                    </div>
                    <div className={css.form_forgot_pass_row}>
                        <text>New password</text>
                        <input/>
                    </div>
                    <div className={css.form_forgot_pass_row}>
                        <text>Re-enter password</text>
                        <input/>
                    </div>
                    <NewButton btnCaption={'Change'} />
                    <div className={css.mascot_forgot_pass}>
                        <img src={img_mascot} alt={'mascot'}/>
                    </div>
                </div>
            )}
        </Fragment>
    )
}