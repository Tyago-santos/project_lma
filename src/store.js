import { configureStore } from '@reduxjs/toolkit';

import themeReducer from './reducer/themeReducer/themeSlice';

export const store = configureStore({
    reducer: {
        theme: themeReducer,
    },
});
