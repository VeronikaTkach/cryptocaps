import React, {Fragment} from "react";
import img_google from '../../assets/images/google_play.svg';
import img_app_store from '../../assets/images/app_store.svg';
// import img_main_back from '../../assets/images/Component 6.svg';
// import img_main_op from '../../assets/images/opacity_back.png';
import img_up_back from '../../assets/images/img_back.png';
import img_title from '../../assets/images/CRYPTOCAPS.svg';
import css from './main.module.scss';

export const Main = () => {


    return (
        <Fragment>
            <div className={css.main_up}>
                <div className={css.main_svg}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1025" viewBox="0 0 1920 1025" fill="none">
                        <path d="M0 0H1920V1025L1730 941H215L0 1025V0Z" fill="#2B0C3A"/>
                    </svg>
                </div>
                <div className={css.main_up_background}>
                    <img className={css.img_up_back} src={img_up_back} alt={'background'}/>
                </div>
                <div className={css.main_layout}>
                    <img className={css.main_layout_img} src={img_title} alt={'title'}/>
                    <div className={css.main_text}>
                        <h6>Bringing the classic “MILK CAPS” game to the WEB3.0 world</h6>
                    </div>
                    <div className={css.main_btns}>
                        <img className={css.app_btn_g} src={img_google} alt={'google play'}/>
                        <img className={css.app_btn_a} src={img_app_store} alt={'app store'}/>
                    </div>
                    <div>
                        <h5 className={css.text_pixy}>Coming soon!</h5>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}