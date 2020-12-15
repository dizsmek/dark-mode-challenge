import React from 'react';
import ThemeContext from '../components/contexts/ThemeContext';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMoon, faSun} from '@fortawesome/free-solid-svg-icons';

export default class ThemeSwitcher extends React.Component {
    static contextType = ThemeContext;

    render() {
        const { theme, toggleTheme } = this.context;
        const darkMode = theme === 'dark';

        return (
            <button className="app__dark-mode-btn icon level-right" onClick={toggleTheme}>
                <FontAwesomeIcon icon={darkMode ? faSun : faMoon} color={darkMode ? '#FFA500' : '#4D5B6B'}/>
            </button>
        );
    }

}