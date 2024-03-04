import { combineEpics } from "redux-observable";
import { allUserRequestEpic } from "./allUserEpic";
import { fetchUserDetailsEpic } from "./userDetailsEpic";

// rootEpic combines all individual epics into a single epic.
// This approach simplifies the integration with the Redux store and
// allows for centralized management of all side effects in the application.
export const rootEpic = combineEpics(
    allUserRequestEpic, 
    fetchUserDetailsEpic,
);
