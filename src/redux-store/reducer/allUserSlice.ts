import type {PayloadAction} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'
import {AllUserStateInterface} from "../../interface/redux-state/AllUserStateInterface";


const initialState: AllUserStateInterface = {
    users: [],
    isLoading: false,
    isSuccessful: false,
    error: {}
}

export const allUserSlice = createSlice({
    name: 'allUser',
    initialState,
    reducers: {
        getAllUserRequestAction: (state: any) => {
            state.isLoading = true;
        },
        getAllUserSuccessAction: (state: any, action: PayloadAction<[]>) => {
            state.users = action.payload
            state.isLoading = false;
            state.isSuccessful = true
        },
        getAllUserFailedAction: (state: any, action: PayloadAction<{}>) => {
            state.isSuccessful = false
            state.result = action.payload
        },
    },
})

export const {
    getAllUserRequestAction,
    getAllUserSuccessAction,
    getAllUserFailedAction
} = allUserSlice.actions

export default allUserSlice.reducer