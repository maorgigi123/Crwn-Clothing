import { USER_ACTION_TYPES } from "./user.types";
import { createAction } from "../../utlis/reducer/reducer.utilis";

export const setCurrentUser = (user) => 
    createAction(USER_ACTION_TYPES.SET_CURRENT_USER,user);