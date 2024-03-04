import {combineEpics} from "redux-observable";
import {allUserRequestEpic} from "./allUserEpic";

export const rootEpic = combineEpics(
    allUserRequestEpic,
);