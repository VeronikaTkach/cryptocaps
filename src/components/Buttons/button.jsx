import React from 'react';
import css from './button.module.scss';

export const MyButton = ({btnCaption, condition()}) => {

    const condition = true;

    return (
        <div className={css.container}>
            <button className={css.btn}>{btnCaption}</button>
            <div className={css.button_glow}></div>
        </div>
    )
}