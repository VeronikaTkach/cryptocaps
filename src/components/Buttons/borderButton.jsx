import React from 'react';
import css from './borderButton.module.scss'

export const BorderButton = ({btnCaption, onClickHandler}) => {
    return (
        <button className={css.parent_container_border} onClick={onClickHandler}>
            <div className={css.svg_border_button}>
                <svg xmlns="http://www.w3.org/2000/svg" width="120" height="40" viewBox="0 0 120 40" fill="none">
                    <path d="M8.69413 7.4891L18.4278 1H119V10.4167V39H1V13.0131L8.69413 7.4891Z" stroke="#F30096" stroke-width="2"/>
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

