import {combineEpics} from "redux-observable";
import {allUserRequestEpic} from "./allUserEpic";
import {fetchUserDetailsEpic} from "./userDetailsEpic"

export const rootEpic = combineEpics(
    allUserRequestEpic,
    fetchUserDetailsEpic,
);