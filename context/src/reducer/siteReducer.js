export default function siteReducer(state, action) {
    switch (action.type) {
        case 'TOGGLE_THEME':
            const theme = state.theme === 'dark' ? 'light' : 'dark'
            localStorage.setItem('theme', theme)
            return {
                ...state,
                theme
            }
        case 'TOGGLE_LANG':
            const language = state.language === 'tr' ? 'en' : 'tr'
            localStorage.setItem('language', language)
            return {
                ...state,
                language
            }
    }
}

