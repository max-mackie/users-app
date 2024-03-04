import {catchError, from, map, mergeMap, of} from "rxjs";
import {ofType} from "redux-observable";
import {
    getAllUserFailedAction,
    getAllUserRequestAction,
    getAllUserSuccessAction,
} from "../reducer/allUserSlice";

export const allUserRequestEpic = (action$: any, state$: any) => {
    return action$.pipe(
        ofType(getAllUserRequestAction.type),
        mergeMap(() =>
            from(
                fetch('https://reqres.in/api/users?page=1').then(response => response.json())
            ).pipe(
                map((response: any) => {
                    if (response.data) {
                        return getAllUserSuccessAction(response.data);
                    } else {
                        throw new Error('Failed to fetch users');
                    }
                }),
                catchError((error) => of(getAllUserFailedAction({ message: error.message })))
            )
        )
    );
};