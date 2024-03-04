import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { AllUserStateInterface } from "../../interface/redux-state/AllUserStateInterface";
import { UserInfoInterface } from "../../interface/UserInfoInterface";
import { ErrorInterface } from "../../interface/ErrorInterface";

// Define the initial state with specific types for better type safety and clarity
const initialState: AllUserStateInterface = {
    users: [],
    isLoading: false,
    isSuccessful: false,
    error: { message: '' }
}

// allUserSlice defines reducers and actions for user-related operations in a Redux store
export const allUserSlice = createSlice({
    name: 'allUser',
    initialState,
    reducers: {
        // Triggered when a request to fetch all users is initiated
        getAllUserRequestAction: (state) => {
            state.isLoading = true;
            state.error = { message: '' };
        },
        // Handles the successful fetching of all users
        getAllUserSuccessAction: (state, action: PayloadAction<UserInfoInterface[]>) => {
            state.users = action.payload;
            state.isLoading = false;
            state.isSuccessful = true;
        },
        // Handles errors if fetching all users fails
        getAllUserFailedAction: (state, action: PayloadAction<ErrorInterface>) => {
            state.error = action.payload;
            state.isLoading = false;
            state.isSuccessful = false;
        },
    },
})

// Exporting the slice's actions for use with dispatch in React components
export const {
    getAllUserRequestAction,
    getAllUserSuccessAction,
    getAllUserFailedAction
} = allUserSlice.actions

// Export the reducer to be included in the store
export default allUserSlice.reducer;
