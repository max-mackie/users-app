import { ofType } from 'redux-observable';
import { catchError, from, map, mergeMap, of } from 'rxjs';
import {
  fetchUserDetailsRequest,
  fetchUserDetailsSuccess,
  fetchUserDetailsFailed,
} from '../reducer/userDetailsSlice';

export const fetchUserDetailsEpic =  (action$: any, state$: any) => {
  return action$.pipe(
    ofType(fetchUserDetailsRequest.type),
    mergeMap((action: any) =>
      from(fetch(`https://reqres.in/api/users/${action.payload}`).then(response => response.json())
      ).pipe(
        map((response: any) => {
          if (response.data) {
            return fetchUserDetailsSuccess(response.data);
          } else {
            throw new Error('Failed to fetch user details');
          }
        }),
        catchError((error: Error) => of(fetchUserDetailsFailed(error.message)))
      )
    )
  );
}