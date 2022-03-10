import { useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetData, GetFetchedUser, GetUser } from "../Redux/Actions/Actions";



// we use this function when layout loaded to the interface of the web page 
export default function UseGetDataUserInLayoutHook() {


    const UserToken = JSON.parse(localStorage.getItem("UserToken"));
    const Users = useSelector((state) => state.fetchusersreducer.users);
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
            dispatch(GetFetchedUser(loggedUser))
        }
    }, [dispatch, UserToken, loggedUser])


    /*const SignOut = () => {
        try {
            if (UserToken) {
                localStorage.removeItem("UserToken");
               // window.location.replace("/AutoWash") ; 
            }
            else {
                console.log("No user Found ");

            }

        } catch (err) {
            console.log("error Find UserToken")
        }

    }*/

    return { loggedUser, UserToken, Users }

}