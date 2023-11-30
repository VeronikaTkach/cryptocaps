import React from 'react';
import css from './bigButton.module.scss'

export const BigButton = ({btnCaption, onClickHandler}) => {
    return (
        <button className={css.parent_container} onClick={onClickHandler}>
            <div className={css.svg_button}>

                <svg xmlns="http://www.w3.org/2000/svg" width="360" height="100" viewBox="0 0 360 100" fill="none">
                    <path d="M24.375 17L54.375 0.5H360V26.2812V99.5H0V31.4375L24.375 17Z" fill="#F30096"/>
                    <text className={css.text_for_button} x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white">
                        {btnCaption}
                    </text>
                </svg>
                {/*<svg xmlns="http://www.w3.org/2000/svg" width="128" height="48" viewBox="0 0 128 48" fill="none">*/}
                {/*    <path d="M8.66667 8L19.3333 0H128V12.5V48H0V15L8.66667 8Z" fill="#F30096"/>*/}
                {/*    <text className={css.text_for_button} x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white">*/}
                {/*        {btnCaption}*/}
                {/*    </text>*/}
                {/*</svg>*/}
            </div>
        </button>
    )
}
