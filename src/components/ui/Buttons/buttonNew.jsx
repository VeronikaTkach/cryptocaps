import React from 'react';
import css from './buttonNew.module.scss'

export const NewButton = ({btnCaption, onClickHandler}) => {
    return (
        <button className={css.parent_container} onClick={onClickHandler}>
            <div className={css.svg_button}>
                <svg xmlns="http://www.w3.org/2000/svg" width="128" height="48" viewBox="0 0 128 48" fill="none">
                    <path d="M8.66667 8L19.3333 0H128V12.5V48H0V15L8.66667 8Z" fill="#F30096"/>
                    <text className={css.text_for_button} x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white">
                        {btnCaption}
                    </text>
                </svg>
            </div>
        </button>
    )
}

