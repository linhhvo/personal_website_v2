import React, {createContext, useReducer, useState, useLayoutEffect} from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

// Initial state
const initialState = {
    theme: 'dark',
    profileSlide: false,
    filterDropDown: false,
    displayedProjects: [],
    allProjects: [],
    loading: true,
    error: null,

    switchTheme: () => { },
    toggleProfilePanel: () => { },
    toggleFilterList: () => { }
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Set up switch theme functionality
    const [theme, setTheme] = useState('dark');

    useLayoutEffect(() => {
        /* If user has never visited the website, theme value in their localStorage = null
        => use OS color scheme to populate initial theme and store it in localStorage
        If user has previously visited the website, use theme value in localStorage to set theme
        */

        const prevTheme = localStorage.getItem('theme');
        const OSDarkMode = window.matchMedia("(prefers-color-scheme: dark)");

        if (prevTheme === 'dark') {
            setTheme('dark');
            document.getElementById('main').classList.replace('light', 'dark');
        } else if (prevTheme === 'light') {
            setTheme('light');
            document.getElementById('main').classList.replace('dark', 'light');
        } else {
            if (OSDarkMode.matches) {
                setTheme('dark');
                document.getElementById('main').classList.replace('light', 'dark');
            } else {
                setTheme('light');
                document.getElementById('main').classList.replace('dark', 'light');
            }
        }
    }, [theme]);

    // Switch theme function to allow toggle theme with light bulb icon
    const switchTheme = () => {
        if (theme === 'dark') {
            setTheme('light');
            localStorage.setItem('theme', 'light');
        } else {
            setTheme('dark');
            localStorage.setItem('theme', 'dark');
        }
    };


    // Actions
    // Show/hide profile panel on mobile view
    const toggleProfilePanel = () => {
        dispatch({
            type: 'SLIDE_PROFILE'
        });
    };

    // Show/hide filter list
    const toggleFilterList = () => {
        dispatch({
            type: 'FILTER_DROPDOWN'
        });
    };

    // Retrieve projects from database
    async function getProjects () {
        try {
            const response = await axios.get('/api/projects');
            dispatch({
                type: 'GET_PROJECTS',
                payload: response.data
            });
        } catch (err) {
            dispatch({
                type: 'PROJECT_ERROR',
                payload: err.response.data.error
            });
        }
    }

    // Filter projects based on query
    async function filterProjects (query) {
        try {
            const response = await axios.get(`/api/projects?${query}`);
            dispatch({
                type: 'FILTER_PROJECTS',
                payload: response.data
            });
        } catch (err) {
            dispatch({
                type: 'PROJECT_ERROR',
                payload: err.response.data.error
            });
        }
    }

    return (
        <GlobalContext.Provider
            value={{
                theme: state.theme,
                profileSlide: state.profileSlide,
                filterDropDown: state.filterDropDown,
                displayedProjects: state.displayedProjects,
                allProjects: state.allProjects,
                error: state.error,
                loading: state.loading,
                getProjects,
                filterProjects,
                switchTheme,
                toggleProfilePanel,
                toggleFilterList
            }}>
            {children}
        </GlobalContext.Provider>);
};