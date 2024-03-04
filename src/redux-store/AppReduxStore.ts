import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "./reducer/rootReducer";
import { createEpicMiddleware } from "redux-observable";
import { rootEpic } from "./epic/rootEpic";

// Create Redux Observable middleware instance.
const epicMiddleware = createEpicMiddleware();

// Configure the Redux store with root reducer, adding epic middleware for side effects.
const AppReduxStore = configureStore({
    reducer: rootReducer, // Combines all reducers for the app
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(epicMiddleware) // Integrates epic middleware into the Redux middleware chain
});

// Start listening to action streams and handling side effects with the root epic.
epicMiddleware.run(rootEpic);

export default AppReduxStore;