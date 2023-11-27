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

                {/*<svg xmlns="http://www.w3.org/2000/svg" width="140" height="48" viewBox="0 0 140 48" fill="none">*/}
                {/*    <path d="M9.47917 8L21.1458 0H140V12.5V48H0V15L9.47917 8Z" fill="url(#paint0_linear_1979_27992)"/>*/}
                {/*    <defs>*/}
                {/*        <linearGradient id="paint0_linear_1979_27992" x1="70" y1="0" x2="70" y2="48" gradientUnits="userSpaceOnUse">*/}
                {/*            <stop stop-color="#F00094"/>*/}
                {/*            <stop offset="1" stop-color="#5D0039"/>*/}
                {/*        </linearGradient>*/}
                {/*    </defs>*/}
                {/*    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white">*/}
                {/*        {btnCaption}*/}
                {/*    </text>*/}
                {/*</svg>*/}
            </div>
        </button>
    )
}

