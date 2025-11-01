import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './store.js';
import { useSelector } from 'react-redux';
// eslint-disable-next-line
const theme = useSelector((state) => state.theme.themeDark);

import valueTheme from './theme.js';
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <ThemeProvider
                    theme={theme ? valueTheme.darkTheme : valueTheme.lightTheme}
                >
                    <App />
                </ThemeProvider>
            </Provider>
        </BrowserRouter>
    </StrictMode>,
);
