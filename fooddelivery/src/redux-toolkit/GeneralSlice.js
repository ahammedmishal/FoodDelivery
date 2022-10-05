import { createSlice } from "@reduxjs/toolkit";

const generalSlice = createSlice({
    name: 'storage',
    initialState: {
        isAppLoading: true,
        token: '',
        isFirstTimeUse: true,
    },
    reducers: {
        SET_IS_APP_LOADING: (state,action) => {
            return state.isAppLoading = action.payload
        },
        SET_TOKEN: (state,action) => {
            return state.token = action.payload
        },
        SET_FIRST_TIME_USE: (state,action) => {
            return state.isFirstTimeUse = action.payload
        }
    }
});

export const {SET_IS_APP_LOADING,SET_TOKEN,SET_FIRST_TIME_USE} = generalSlice.actions;

export default generalSlice.reducer;