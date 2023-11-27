import React, { useState } from 'react';
import css from './checkbox.module.scss'

const PinkCheckbox = ({ label }) => {
    const [isChecked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
        setChecked(!isChecked);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                style={{
                    position: 'relative',
                    margin: '0 8px',
                    appearance: 'none',
                    width: '20px',
                    height: '20px',
                    borderRadius: '3px',
                    border: `4px solid ${isChecked ? '#F30096' : '#F30096'}`, // Розовая рамка всегда
                    backgroundColor: isChecked ? '#36E519' : '##36E519', // Розовый цвет всегда
                }}
            />
            <label className={css.text_checkbox}>{label}</label>
            <style>{`
                input:checked::before {
                    content: '✔';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    color: #F30096; // Цвет галочки
        }
      `}</style>
        </div>
    );
};

export default PinkCheckbox;