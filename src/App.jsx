import { useState, useEffect } from 'react';

import { ThemeProvider, CssBaseline, useMediaQuery } from '@mui/material';
import { lightTheme, darkTheme } from './styles/themes';

import UserList from './components/user-list/UserList';

export default function App() {
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
    const [isDarkMode, setIsDarkMode] = useState(prefersDarkMode);

    useEffect(() => {
        setIsDarkMode(prefersDarkMode);
    }, [prefersDarkMode]);

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            <UserList />
        </ThemeProvider>
    );
}