import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchUserDetailsRequest} from "../../redux-store/reducer/userDetailsSlice";
import UserCard from "../UserCard";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export function UserDetails() {
    const {userId} = useParams<{userId: string}>();
    const userState = useSelector((state: any) => state.userDetails.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();   
    
    const handleClick = () => {
        navigate(`/`)
    }

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
        <div 
            className="flex flex-col w-[50%] mt-16 justify-center items-center border shadow p-4 bg-white"
            onClick={handleClick}
        >
            <img 
                className="h-[80%] w-[80%] md:h-[70%] md:w-[70%] object-cover rounded-full border-4 border-gray-200" // Adjusted for roundness and border
                alt="user image" 
                src={userState.avatar}
            />
            <span className="mt-2 text-lg font-semibold">{`${userState.first_name} ${userState.last_name}`}</span>
            <span className="text-gray-600">{userState.email}</span>
        </div>
        <button className="black_btn text-md sm:text-xl mt-10" onClick={handleClick}>
            back
        </button>
    </>)
}

export default UserDetails;