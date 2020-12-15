import React from 'react';
import ThemeContext from './contexts/ThemeContext';

export default class AppContainer extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            theme: 'light',
            toggleTheme: this.toggleTheme
        }
    }

    toggleTheme = () => {
        this.setState(prevState => ({ theme: prevState.theme === 'light' ? 'dark' : 'light' }))
    }

    render() {
        const {children} = this.props;
        const darkMode = this.state.theme === 'dark';

        return (
            <ThemeContext.Provider value={this.state}>
                <div className={`app-container${darkMode ? ' dark-mode' : ''}`}>
                    {children}
                </div>
            </ThemeContext.Provider>
        );
    }

}