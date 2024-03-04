import { combineReducers } from '@reduxjs/toolkit';
import allUserReducer from './allUserSlice';
import userDetailsReducer from './userDetailsSlice'; 

const rootReducer = combineReducers({
    allUser: allUserReducer,
    userDetails: userDetailsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
