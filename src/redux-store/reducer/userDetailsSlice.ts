import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserDetailsState } from '../../interface/redux-state/UserDetailsStateInterface';
import { UserInfoInterface } from "../../interface/UserInfoInterface";

// Initial state with type for better type safety and clarity
const initialState: UserDetailsState = {
    user: null,
    isLoading: false,
    isSuccessful: false,
    error: { message: '' },
};

const UserDetailsSlice = createSlice({
    name: 'userDetails',
    initialState,
    reducers: {
        // Triggered when a request to fetch user details starts
        fetchUserDetailsRequest: (state, action: PayloadAction<number>) => {
            state.isLoading = true;
            state.isSuccessful = false;
            state.error = { message: '' }; // Reset error message on new request
        },
        // Handles successful fetching of user details
        fetchUserDetailsSuccess: (state, action: PayloadAction<UserInfoInterface>) => {
            state.user = action.payload;
            state.isLoading = false;
            state.isSuccessful = true;
        },
        // Handles failure in fetching user details
        fetchUserDetailsFailed: (state, action: PayloadAction<string>) => {
            state.error = { message: action.payload };
            state.isLoading = false;
            state.isSuccessful = false;
        },
    },
});

// Exporting the slice's actions for use with dispatch in React components
export const { fetchUserDetailsRequest, fetchUserDetailsSuccess, fetchUserDetailsFailed } = UserDetailsSlice.actions;

// Export the reducer to be included in the store
export default UserDetailsSlice.reducer;
