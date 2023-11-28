import React, { useState } from "react";

export const LangSelect = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('en'); // Изначально выбран английский язык

    const handleLangChange = (e) => {
        setSelectedLanguage(e.target.value);
        // Здесь можно добавить логику для сохранения выбранного языка в хранилище (например, localStorage)
    };

    return (
        <div>
            <select id="language" value={selectedLanguage} onChange={handleLangChange}>
                <option value="en">ENG</option>
                <option value="ru">RUS</option>
            </select>
        </div>
    );
}