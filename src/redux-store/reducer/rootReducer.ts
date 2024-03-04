import { combineReducers } from '@reduxjs/toolkit';
import allUserReducer from './allUserSlice';
import userDetailsReducer from './userDetailsSlice';

// Combines individual slice reducers into a single rootReducer, structuring the global state.
const rootReducer = combineReducers({
    allUser: allUserReducer,
    userDetails: userDetailsReducer,
});

// RootState type is derived from rootReducer for TypeScript support throughout the app.
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;