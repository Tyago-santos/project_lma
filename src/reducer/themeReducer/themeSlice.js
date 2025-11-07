import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        themeDark: true,
        showModal: true,
    },
    reducers: {
        changeTheme(state, action) {
            state.themeDark = action.payload.themeDark;
        },

        setShowModal(state, action) {
            state.showModal = action.payload.showModal;
        },
    },
});

export const { changeTheme, setShowModal } = themeSlice.actions;
export default themeSlice.reducer;
