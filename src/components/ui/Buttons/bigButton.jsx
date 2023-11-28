import React from 'react';
import css from './bigButton.module.scss'

export const BigButton = ({btnCaption}) => {
    return (
        <button className={css.parent_container}>
            <div className={css.svg_button}>
                <svg xmlns="http://www.w3.org/2000/svg" width="260" height="48" viewBox="0 0 260 48" fill="none">
                    <path d="M259 12.5V47H1V15.4766L18.8545 1H259V12.5Z" stroke="#2B0C3A" stroke-width="2"/>
                    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#2B0C3A">
                        {btnCaption}
                    </text>
                </svg>
            </div>
        </button>
    )
}
