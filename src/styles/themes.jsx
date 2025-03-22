import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1976d2',
        },
        background: {
            default: '#f5f5f5',
            paper: '#fff',
        },
        text: {
            primary: '#000',
        },
        hoverColor: '#e0e0e0', 
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#026bbf',
        },
        background: {
            default: '#121212',
            paper: '#333',
        },
        text: {
            primary: '#fff',
        },
        hoverColor: '#4444',
    },
});
