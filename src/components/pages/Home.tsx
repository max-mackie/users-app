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

    return (<>
        <div className="grid grid-cols-3 gap-3 p-2">
            {allUserState.users.map((user: UserInfoInterface) => {
                return <UserCard user={user} key={user.id}/>
            })}
        </div>
    </>)
}

export default HomeComponent;