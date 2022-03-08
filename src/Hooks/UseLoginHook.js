
//import { useState } from "react";
import { useDispatch } from "react-redux";
import { GetFetchedUser } from "../Redux/Actions/Actions";



export default function UseLoginHook(Values, Users) {


    const dispatch = useDispatch()
    //const [loggedUser, SetloggedUser] = useState();


    function LoginService() {

        var User = Users?.filter((user,) => {
            return user.data.RegEmail === Values.LoginEmail && user.data.RegPassword === Values.LoginPassword
        })

        if (User.length !== 0) {
            console.log(User)
            dispatch(GetFetchedUser(User))
        } else {
            alert(" The Email or paswword may have error ")
        }

        /*
        for (let i = 0; i < Users.length; i++) {

            if (Values && Users ) {
                console.log(Users)
                console.log(Values)
                if (Users[i].data.RegEmail === Values.LoginEmail && Users[i].data.RegPassword === Values.LoginPassword) {

                    dispatch(GetFetchedUser(Users[i].data))
                   //SetloggedUser(Users[i].data) ;
                    //console.log(Users[i].data)
                }
                else{
                    alert("email or Password didot Exist ")
                }
            }
            else {
                console.log(" no data ")
            }
        }*/

    }

    return {  LoginService }


}