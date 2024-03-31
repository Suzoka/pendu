'use client';
import { useState, useEffect } from 'react';
import Classes from './lightDarkButton.module.css';

export const LightDarkButton = () => {

    const [mode, setMode] = useState(0);

    const switchMode = () => {
        const body = document.querySelector('body');
        if (mode == 0) {
            body.classList.add('light');
            setMode(1);
        }
        else {
            body.classList.remove('light');
            setMode(0);
        }
    };

    return (
        <button className={`${mode == 0 ? Classes.dark : Classes.light} ${Classes.button}`} onClick={switchMode}>{mode == 0 ? "Passer en mode lumineux" : "Passer en mode sombre"}</button>
    )
};