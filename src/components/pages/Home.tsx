import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllUserRequestAction} from "../../redux-store/reducer/allUserSlice";
import {UserInfoInterface} from "../../interface/UserInfoInterface";

export function HomeComponent() {
    const allUserState = useSelector((state: any) => state.allUser);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUserRequestAction());
    }, []);

    return (<>
        <div className="grid grid-cols-3 gap-3 p-2">
            {allUserState.users.map((user: UserInfoInterface, index: number) => {
                return <div className="flex flex-col justify-center items-center hover:cursor-pointer border shadow"
                            key={index}>
                    <img className="h-65 w-60" alt="" src={user.avatar}/>
                    <span>{`Name: ${user.first_name} ${user.last_name}`}</span>
                    <span>{`Email: ${user.email}`}</span>
                </div>
            })}
        </div>
    </>)
}

export default HomeComponent;