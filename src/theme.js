import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

//color design token export
export const tokens = (mode) => ({
    ...(mode === 'light'
    ? {
        primary: {
            100: "#ccf1e3",
            200: "#99e3c6",
            300: "#66d5aa",
            400: "#33c78d",
            500: "#00b971",
            600: "#00945a",
            700: "#006f44",
            800: "#004a2d",
            900: "#002517"
        },
        economico: {
            100: "#fdedd6",
            200: "#fadbac",
            300: "#f8c883",
            400: "#f5b659",
            500: "#f3a430",
            600: "#c28326",
            700: "#92621d",
            800: "#614213",
            900: "#31210a"
        },
        
        social: {
            100: "#d5e5f6",
            200: "#abcbed",
            300: "#81b1e4",
            400: "#5797db",
            500: "#2d7dd2",
            600: "#2464a8",
            700: "#1b4b7e",
            800: "#123254",
            900: "#09192a"
        },
    }
    :
    {
        primary: {
            100: "#002517",
            200: "#004a2d",
            300: "#006f44",
            400: "#00945a",
            500: "#00b971",
            600: "#33c78d",
            700: "#66d5aa",
            800: "#99e3c6",
            900: "#ccf1e3"
        },
        
        economico: {
            100: "#31210a",
            200: "#614213",
            300: "#92621d",
            400: "#c28326",
            500: "#f3a430",
            600: "#f5b659",
            700: "#f8c883",
            800: "#fadbac",
            900: "#fdedd6",
        },
        
        social: {
            100: "#09192a",
            200: "#123254",
            300: "#1b4b7e",
            400: "#2464a8",
            500: "#2d7dd2",
            600: "#5797db",
            700: "#81b1e4",
            800: "#abcbed",
            900: "#d5e5f6",
        },
    }),
});

//mui theme settings
export const themeSettings = (mode) => {
    const colors = tokens(mode);
    return {
        palette: {
            mode: mode,
            ...(mode === 'light'
            ?{
               //Pallet values for light mode
               primary: {
                main: colors.primary[500],
               },
               economico: {
                main: colors.economico[500],
               },
               social: {
                main: colors.social[500],
               },
               background: {
                default: colors.primary[100],
               }
            }: 
            {
                //Pallet values for dark mode
               primary: {
                main: colors.primary[100],
               },
               economico: {
                main: colors.economico[100],
               },
               social: {
                main: colors.social[100],
               },
               background: {
                default: colors.primary[100],
               }
            })
        },
        typography: {
            fontFamily: ['Roboto', 'sans-serif'].join(','),
            fontSize: 14,
            h1: {
                fontFamily: ['Roboto', 'sans-serif'].join(','),
                fontSize: 40,
            },
            h2: {
                fontFamily: ['Roboto', 'sans-serif'].join(','),
                // fontSize: 32,
                fontSize: '2vw',
                fontWeight: 700,
                lineHeight: 'normal',
            },
            h3: {
                fontFamily: ['Roboto', 'sans-serif'].join(','),
                fontSize: 28,
                fontWeight: 700,
            },
            h4: {
                fontFamily: ['Roboto', 'sans-serif'].join(','),
                fontSize: '1.5em',
            },
            h5: {
                fontFamily: ['Roboto', 'sans-serif'].join(','),
                fontSize: '1em',
            },
            h6: {
                fontFamily: ['Roboto', 'sans-serif'].join(','),
                fontSize: 16,
            },
            divider:{
                backgroundColor: '#989898',
            }
        },
    };
};

//context for color mode
export const ColorModeContext = createContext({
    toggleColorMode: () => {},
})

//custom theme provider
export const useMode = () => {
    const [mode, setMode] = useState('light');

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            }
        }),
        []
    )
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    return [theme, colorMode];
}