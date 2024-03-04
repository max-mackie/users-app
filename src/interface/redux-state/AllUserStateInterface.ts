import {UserInfoInterface} from "../UserInfoInterface";
import {CommonStateInterface} from "./CommonStateInterface";

export interface AllUserStateInterface extends CommonStateInterface {
    users: Array<UserInfoInterface>,
}