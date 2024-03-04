import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllUserRequestAction} from "../../redux-store/reducer/allUserSlice";
import {UserInfoInterface} from "../../interface/UserInfoInterface";
import UserCard from "../UserCard";

export function HomeComponent() {
    const allUserState = useSelector((state: any) => state.allUser);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUserRequestAction());
    }, [dispatch]);

    return (
    <>
        <h1 className="head_text blue_gradient text-center mb-16">Meet The Team</h1>
        <div className="flex gap-8 justify-center flex-wrap p-2">
            {allUserState.users.map((user: UserInfoInterface) => {
                return <UserCard user={user} key={user.id}/>
            })}
        </div>
    </>)
}

export default HomeComponent;