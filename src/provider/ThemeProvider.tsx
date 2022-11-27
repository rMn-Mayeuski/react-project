import { ReactNode, useContext, useState } from 'react';
import { changeCssRootVariables } from '../components/App/ChangeCssRootVariables';
import { Theme, ThemeContext } from '../context/ThemeContext';
import { themeStorage } from '../store/ThemeStorage';

    interface Props {
    children: ReactNode;
    }

    export const useTheme = () => useContext(ThemeContext);

    export const ThemeProvider = ({ children, ...props }: Props) => {
    const [theme, setTheme] = useState<Theme>(
        themeStorage.getItem('theme') || Theme.DARK
    );
    changeCssRootVariables(theme);
    function changeTheme(theme: Theme) {
        themeStorage.setItem('theme', theme);
        setTheme(theme);
        changeCssRootVariables(theme);
    }

    return (
        <ThemeContext.Provider
        value={{
            theme,
            changeTheme,
        }}
        {...props}
        >
        {children}
        </ThemeContext.Provider>
    );
};