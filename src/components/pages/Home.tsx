import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllUserRequestAction } from "../../redux-store/reducer/allUserSlice";
import { UserInfoInterface } from "../../interface/UserInfoInterface";
import { RootState } from "../../redux-store/reducer/rootReducer";
import UserCard from "../UserCard";
import { AllUserStateInterface } from "../../interface/redux-state/AllUserStateInterface";
import loaderSvg from "../../loader.svg"; // Import loader graphic for visual feedback during data fetching.

/**
 * Displays the home page with a list of users.
 * Utilizes Redux for state management and effects for data fetching on component mount.
 * Renders a loading state, error messages, or a list of UserCards based on the current state.
 */
export function HomeComponent() {
    // Hook into the Redux store for state management, specifically accessing the state slice concerning user data.
    const allUserState = useSelector<RootState, AllUserStateInterface>((state: RootState) => state.allUser);
    const dispatch = useDispatch();

    // Effect hook to initiate user data fetching on component mount. Dependency on `dispatch` ensures effect runs only once.
    useEffect(() => {
        dispatch(getAllUserRequestAction());
    }, [dispatch]);

    // Early return pattern for loading state, providing a user-friendly loading feedback.
    if (allUserState.isLoading) {
        return <img src={loaderSvg} alt="Loading..." />;
    }

    // Conditional rendering for error state, displaying any error messages received during data fetching.
    if (allUserState.error.message) {
        return <p>Error: {allUserState.error.message}</p>;
    }

    return (
        <>
            <h1 className="head_text blue_gradient text-center mb-16">Meet The Team</h1>
            <div className="flex gap-8 justify-center flex-wrap p-2">
                {allUserState.users.map((user: UserInfoInterface) => (
                    // Render each user as a UserCard, using their unique ID for React's list rendering optimization.
                    <UserCard user={user} key={user.id} />
                ))}
            </div>
        </>
    );
}

export default HomeComponent;