import { stringIsNullOrEmpty } from "./stringUtils"

export const isSignedIn = () => {
    const userName = localStorage.getItem("user_name");
    const userId = localStorage.getItem("user_id");
    return (!stringIsNullOrEmpty(userName) && !stringIsNullOrEmpty(userId));
};