import { useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetData, GetFetchedUser, GetUser } from "../Redux/Actions/Actions";
import { getUsersSelector } from "../Selectors/userSelector";



// we use this function when layout loaded to the interface of the web page 
export default function UseGetDataUserInLayoutHook() {


    const UserToken = JSON.parse(localStorage.getItem("Token"));
    const Users = useSelector( getUsersSelector );
    const loggedUser = Users.filter((user) => {
        return user.userToken === UserToken;
    });
    const dispatch = useDispatch();

    useLayoutEffect(() => {
        dispatch(GetData("AllData"));
        dispatch(GetUser());
    }, [dispatch])

    useEffect(() => {
        if (loggedUser.length > 0) {
            //console.log("loogerUser")
            dispatch(GetFetchedUser(loggedUser))
        }
    }, [dispatch, UserToken, loggedUser])


    

    return { loggedUser, UserToken, Users }

}