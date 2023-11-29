import React, { useState } from "react";
import img_en from '../../../assets/icons/eng.svg';
import css from './langSelect.module.scss'

export const LangSelect = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('en'); // Изначально выбран английский язык

    const handleLangChange = (e) => {
        setSelectedLanguage(e.target.value);
        // Здесь можно добавить логику для сохранения выбранного языка в хранилище (например, localStorage)
    };

    return (
        <div className={css.custom_select}>
            <select id="language" value={selectedLanguage} onChange={handleLangChange}>
                <option value="en">ENG</option>
                <option value="ru">RUS</option>
            </select>
        </div>
    );
}

