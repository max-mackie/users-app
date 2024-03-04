import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserDetailsState } from '../../interface/redux-state/UserDetailsStateInterface';
import {UserInfoInterface} from "../../interface/UserInfoInterface";


const initialState: UserDetailsState = {
    user: null,
    isLoading: false,
    isSuccessful: false,
    error: {},
};

const UserDetailsSlice = createSlice({
    name: 'userDetails',
    initialState,
    reducers: {
        fetchUserDetailsRequest: (state: any, action: PayloadAction<number>) => {
            state.loading = true;
            state.isSuccessful = false;
            state.error = {};
        },
        fetchUserDetailsSuccess: (state, action: PayloadAction<UserInfoInterface>) => {
            state.user = action.payload;
            state.isLoading = false;
            state.isSuccessful = true
        },
        fetchUserDetailsFailed: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.isLoading = false;
            state.isSuccessful = false;
        }
    }
});

export const {fetchUserDetailsRequest, fetchUserDetailsSuccess, fetchUserDetailsFailed} = UserDetailsSlice.actions

export default UserDetailsSlice.reducer;