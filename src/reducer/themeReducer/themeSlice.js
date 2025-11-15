import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        themeDark: true,
        showModalData: false,
    },
    reducers: {
        changeTheme(state, action) {
            state.themeDark = action.payload.themeDark;
        },
        setShowModaData(state, action) {
            state.showModalData = action.payload.showModalData;
        },
    },
});

export const { changeTheme, setShowModal, setShowModaData } =
    themeSlice.actions;
export default themeSlice.reducer;
