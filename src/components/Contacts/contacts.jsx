import React, {Fragment} from "react";
import css from './contacts.module.scss';
import {Link} from "react-router-dom";
import {BigButton} from "../ui/Buttons";
import img_arrows from '../../assets/images/arrows.svg';
import mascot_footer from '../../assets/images/mascot_footer.svg';


export const Contacts = () => {

    const clickHandler = () => {
        return
    }

    return(
        <Fragment>
            <div>
                <div className={css.contacts_back_up}>
                   <div className={css.partners}>COMING SOON</div>
                   <div className={css.contacts}>
                       <h5 className={css.text_contacts_big}>Contacts</h5>
                       <h6 className={css.text_contacts_small}>Name</h6>
                       <input className={css.contacts_input}/>
                       <h6 className={css.text_contacts_small}>Email</h6>
                       <input className={css.contacts_input}/>
                       <h6 className={css.text_contacts_small}>Your project</h6>
                       <input className={css.contacts_input_big}/>
                       <div className={css.send_message}>
                           <img className={css.img_arrows} src={img_arrows} alt={'arrows'}/>
                           <BigButton btnCaption={'SEND MESSAGE'} onClickHandler={clickHandler}/>
                       </div>
                   </div>
                   <img className={css.mascot_footer} src={mascot_footer} alt={'mascot'}/>
                </div>
            </div>
        </Fragment>
    )
}