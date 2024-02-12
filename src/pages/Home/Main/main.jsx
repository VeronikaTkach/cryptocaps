import React from "react";
import img_google from '../../../assets/images/google_play.svg';
import img_app_store from '../../../assets/images/app_store.svg';
import img__back from '../../../assets/images/MAIN SCREEN.png';
import img__title from '../../../assets/images/CRYPTOCAPS.svg';
import css from './main.module.scss';

export const Main = () => {

    return (
        <>
            <div className={css.main}>
                <div className={css.main__background}>
                    <img className={css.background__img} src={img__back} alt={'background'}/>
                </div>
                <div className={css.main__layout}>
                    <img className={css.main__layoutImg} src={img__title} alt={'title'}/>
                    <div className={css.main__text}>
                        <h6>Bringing the classic “MILK CAPS” game to the WEB3.0 world</h6>
                    </div>
                    <div className={css.main__btns}>
                        <img className={css.app_btn_g} src={img_google} alt={'google play'}/>
                        <img className={css.app_btn_a} src={img_app_store} alt={'app store'}/>
                    </div>
                    <div>
                        <h5 className={css.main__text_pixy}>Coming soon!</h5>
                    </div>
                </div>
            </div>
        </>
    )
}