import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchUserDetailsRequest} from "../../redux-store/reducer/userDetailsSlice";
import UserCard from "../UserCard";
import { useParams } from 'react-router-dom';


export function UserDetails() {
    const {userId} = useParams<{userId: string}>();
    const userState = useSelector((state: any) => state.userDetails.user);
    const dispatch = useDispatch();

    useEffect(() => {
        if (userId !== undefined) {
            const id = parseInt(userId, 10);
            if (!isNaN(id)) {
                dispatch(fetchUserDetailsRequest(id));
            }
        } else {
            // Handle the case where userId is undefined
            console.error("userId is undefined");
        }
    }, [dispatch, userId]);

    return (<>
        <div className="grid grid-cols-3 gap-3 p-2">
            {userState ? (
                    // Render user details. Adjust according to your data structure
                    <UserCard user={userState} />
                ) : (
                    <p>No user details available.</p>
                )}
        </div>
    </>)
}

export default UserDetails;