import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";

import createEmotionCache from "../utils/createEmotionCache";
import lightTheme from "../styles/theme/lightTheme";
import darkTheme from "../styles/theme/darkTheme";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { AuthProvider } from "../src/auth";
import {useRouter} from "next/router";

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
    const {
        Component,
        emotionCache = clientSideEmotionCache,
        pageProps: { session, ...pageProps },
    } = props;
    
    var systemTheme = false;
    if (typeof window !== "undefined") {
        systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    const [darkMode, setDarkMode] = useState(systemTheme);
    
    const [showNavbar, setShowNavbar] = useState(true);

    const noNavbarRoutes = ["/"];
    const currentRoute = useRouter().route;

    useEffect(() => {
        if (noNavbarRoutes.includes(currentRoute)) {
        setShowNavbar(false);
        } else {
        setShowNavbar(true);
        }
    }, [currentRoute]);

    return (
        <AuthProvider>
            <CacheProvider value={emotionCache}>
                <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
                    <CssBaseline />
                    {showNavbar ? <Navbar /> : null}
                    <Component {...pageProps} />
                </ThemeProvider>
            </CacheProvider>
        </AuthProvider>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    emotionCache: PropTypes.object,
    pageProps: PropTypes.shape({
        session: PropTypes.object,
    }),
};