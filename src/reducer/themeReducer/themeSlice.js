import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        themeDark: true,
    },
    reducers: {
        changeTheme(state, action) {
            state.themeDark = !action.payload.themeDark;
        },
    },
});

export const { changeTheme } = themeSlice;
export default themeSlice.reducer;
