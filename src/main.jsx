import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './store.js';
import { useSelector } from 'react-redux';

import valueTheme from './theme.js';

function RootComponents() {
    const theme = useSelector((state) => state.theme.themeDark);
    return (
        <BrowserRouter>
            <ThemeProvider
                theme={theme ? valueTheme.darkTheme : valueTheme.lightTheme}
            >
                <App />
            </ThemeProvider>
        </BrowserRouter>
    );
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <RootComponents />
        </Provider>
    </StrictMode>,
);
