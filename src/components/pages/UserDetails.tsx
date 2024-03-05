import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUserDetailsRequest } from "../../redux-store/reducer/userDetailsSlice";
import { useParams, useNavigate } from 'react-router-dom';
import { AppRoutes } from "../../utils/AppRoutes";
import { RootState } from "../../redux-store/reducer/rootReducer";

/**
 * Component to display the details of a user.
 * Utilizes the user ID from the URL parameters to fetch and display user data.
 */
export function UserDetails() {
    const { userId } = useParams<{ userId: string }>();
    const userState = useSelector((state: RootState) => state.userDetails.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    // Navigates back to the Home page
    const handleClick = () => navigate(AppRoutes.HOME);

    // Fetch user details on component mount or when userId changes
    useEffect(() => {
        if (userId) {
            const id = parseInt(userId, 10);
            if (!isNaN(id)) dispatch(fetchUserDetailsRequest(id));
        } else {
            console.error("userId is undefined");
        }
    }, [dispatch, userId]);

    // Show a message if no user details are available
    if (!userState) {
        return <p>No user details available.</p>;
    }

    return (
        <>
            <div className="flex flex-col w-[50%] mt-16 justify-center items-center border shadow p-4 bg-white">
                <img 
                    className="h-[80%] w-[80%] md:h-[70%] md:w-[70%] object-cover rounded-full border-4 border-gray-200"
                    alt="user profile"
                    src={userState.avatar}
                />
                <span className="mt-2 text-lg font-semibold">{`${userState.first_name} ${userState.last_name}`}</span>
                <span className="text-gray-600">{userState.email}</span>
            </div>
            <button className="black_btn text-md sm:text-xl mt-10" onClick={handleClick}>
                Back
            </button>
        </>
    );
}

export default UserDetails;
