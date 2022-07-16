import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: {
            isLogged: false,
            email: "",
            token: 0
        }
    },
    reducers: {
        setUserData: (state, action) => {
            state.data = action.payload;
        }
    }
});

export const { setUserData } = userSlice.actions;

export const setUserLogged = () => (dispatch) => {
    if (JSON.parse(localStorage.getItem('user')).isLogged) dispatch(setUserData(JSON.parse(localStorage.getItem('user'))));
}