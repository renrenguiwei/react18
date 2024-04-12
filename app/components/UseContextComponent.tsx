"use client";
import { createContext, useContext } from 'react';

const ThemeContext = createContext('light');

export default function UseContextComponent() {
    return (
        <ThemeContext.Provider value="dark">
            <Toolbar />
        </ThemeContext.Provider>
    )
}

function Toolbar() {
    const theme = useContext(ThemeContext);
    return (
        <div>
            <div className="">{theme}</div>
            <ThemedButton />
        </div>
    );
}

function ThemedButton() {
    const theme = useContext(ThemeContext);
    return (
        <button className={theme}>I am styled by theme context! {theme}</button>
    );
}