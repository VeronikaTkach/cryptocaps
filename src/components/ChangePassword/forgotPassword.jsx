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
                    <div className={css.container_forgot}>
                        <div>
                            <div className={css.ch_forgot_header}>
                                <Link to={'/'} className={css.button_return}>
                                    <img src={img_vector} alt={'arrow back'}/>
                                </Link>
                                <h2>Forgot your password</h2>
                            </div>
                            <div className={css.form_forgot_pass}>
                                <h6>Please enter your email address to request a password reset</h6>
                                <div className={css.form_forgot_pass_row}>
                                    <h6>Email address</h6>
                                    <input/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={css.btn_forgot}>
                        <NewButton btnCaption={'Next'} onClickHandler={showVerCode}/>
                    </div>
                    <div className={css.mascot_forgot_pass}>
                        <img src={img_mascot} alt={'mascot'}/>
                    </div>
                </div>
            )}
            {isVerCodeVisible && (
                <div className={css.box_forgot}>
                    <div className={css.container_forgot}>
                        <div className={css.ch_forgot_header}>
                            <Link to={'/'} className={css.button_return} onClick={showEnterEmail}>
                                <img src={img_vector} alt={'arrow back'}/>
                            </Link>
                            <h2>Forgot your password</h2>
                        </div>
                        <div className={css.form_ver_code}>
                            <div className={css.big_text}>
                                <h6>Please enter your the Verification code</h6>
                            </div>
                            <div className={css.small_text}>
                                <text>We have sent the verification code to your email</text>
                            </div>
                            <div className={css.ver_code}>
                                <input className={css.put_code}/>
                                <input className={css.put_code}/>
                                <input className={css.put_code}/>
                                <input className={css.put_code}/>
                            </div>
                        </div>
                        <div className={css.btn_forgot}>
                            <NewButton btnCaption={'Done'} onClickHandler={showNewPass}/>
                        </div>
                        <div className={css.mascot_forgot_pass}>
                            <img src={img_mascot} alt={'mascot'}/>
                        </div>
                    </div>
                </div>
            )}
            {isNewPassVisible && (
                <div className={css.box_forgot}>
                    <div className={css.container_forgot}>
                            <div className={css.ch_forgot_header}>
                                <Link to={'/'} className={css.button_return} onClick={showVerCode}>
                                    <img src={img_vector} alt={'arrow back'}/>
                                </Link>
                                <h2>Forgot your password</h2>
                            </div>
                            <div className={css.form_change}>
                                <div className={css.form_forgot_pass_row}>
                                    <h6>New password</h6>
                                    <input/>
                                </div>
                                <div className={css.form_forgot_pass_row}>
                                    <h6>Re-enter password</h6>
                                    <input/>
                                </div>
                            </div>
                        <div className={css.btn_forgot}>
                            <NewButton btnCaption={'Change'} />
                        </div>
                        <div className={css.mascot_forgot_pass}>
                            <img src={img_mascot} alt={'mascot'}/>
                        </div>
                    </div>
                </div>
            )}
        </Fragment>
    )
}