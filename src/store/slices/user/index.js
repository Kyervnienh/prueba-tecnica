import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLogged: false,
        data: {
            email: "",
            token: 0
        }
    },
    reducers: {
        setUserData: (state, action) => {
            state.data = action.payload;
        },
        setLoggedStatus: (state, action) => {
            state.isLogged = action.payload
        }
    }
});

export const { setUserData, setLoggedStatus } = userSlice.actions;

export const setUserLogged = (email, token) => (dispatch) => {
    dispatch(setUserData({email: email, token: token}));
    dispatch(setLoggedStatus(true));
}

export const setUserLogOut = () => (dispatch) => {
    dispatch(setLoggedStatus(false));
}