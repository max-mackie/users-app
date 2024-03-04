import {UserInfoInterface} from "../UserInfoInterface";
import {CommonStateInterface} from "./CommonStateInterface";

export interface UserDetailsState  extends CommonStateInterface {
    user: UserInfoInterface | null;
}