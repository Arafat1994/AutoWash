import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import { GetFetchedUser } from "../Redux/Actions/Actions";


const Users = createSelector(
    (state) => { console.log("createselector"); return state.fetchusersreducer },
    (fetchusersreducer) => fetchusersreducer.users
)

export default function UseValiationHook(sentValues, url) {

  
    const dispatch = useDispatch();
    const users = useSelector(Users);
    const [Values, setValues] = useState(sentValues);
    const [Formerrors, setFormErrors] = useState({ ContactErr: {}, NewsErr: {}, SigninErr: {}, RegisterErr: {} });
    const [Issubmit, setIssubmit] = useState(false);
    const [lastid, setLastId] = useState();
    const Token = Math.floor(Math.random() * 1514000) + 1;
    //const {EmailExist} = useCheckeEmailExistHook(); 
    /*
    //this is another way to get data using useselectors 
    const { users } = useSelector(({ fetchusersreducer: { users } }) => {
         //console.log("selector run ");
         return ({ users })
     }, shallowEqual);
     */
    const EmailExist = (InputEmail) => {
        const val = users.find((user) => {
            if (user.data.RegEmail === InputEmail) {
                console.log("Email exist from func hook  ")
                return true;
            }
            else {
                console.log("Email doesnot Exist from func hook ")
                return false;
            }
        })
        console.log(val)
        return val;
    }

    const ValidationFun = (values) => {
        const errors = { ContactErr: {}, NewsErr: {}, SigninErr: {}, RegisterErr: {} };
        const fullnameRegex = new RegExp("^[A-zA-Z0-9_ ]{3,16}$");
        const subjectRegex = new RegExp("^[A-zA-Z0-9_ ]{10,40}$");
        const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");;


        if (!values.Contactfullname) { errors.ContactErr.Contactfullname = " Fullname required " }
        else if (!fullnameRegex.test(values.Contactfullname)) { errors.ContactErr.Contactfullname = "fullname must have at least 3 chars and max 16 chars  " }

        if (!values.ContactEmail) { errors.ContactErr.ContactEmail = " Email required " }
        else if (!emailRegex.test(values.ContactEmail)) { errors.ContactErr.ContactEmail = "Please enter A valid email " }

        if (!values.ContactSubject) { errors.ContactErr.ContactSubject = " Subject is required " }
        else if (!subjectRegex.test(values.ContactSubject)) { errors.ContactErr.ContactSubject = " subject must be at least 10 chars and maximum 40  chars " }

        if (!values.ContactMessage) { errors.ContactErr.ContactMessage = " Message  is required " }

        if (!values.NewsFullname) { errors.NewsErr.NewsFullname = " Fullname required " }
        else if (!fullnameRegex.test(values.NewsFullname)) { errors.NewsErr.NewsFullname = "fullname must have at least 3 chars and max 16 chars  " }

        if (!values.NewsEmail) { errors.NewsErr.NewsEmail = "Email Required " }
        else if (!emailRegex.test(values.NewsEmail)) { errors.NewsErr.NewsEmail = " please Enter A valid Email " }
        // LoginEmail:"" ,LoginPassword:""
        if (!values.LoginEmail) { errors.SigninErr.LoginEmail = " Email Required " }
        else if (!emailRegex.test(values.LoginEmail)) { errors.SigninErr.LoginEmail = "Please enter A valid email " }

        if (!values.LoginPassword) { errors.SigninErr.LoginPassword = " Password Required " }
        else if (!passwordRegex.test(values.LoginPassword)) { errors.SigninErr.LoginPassword = "Please Enter a valid Password  " }


        //{RegFName:"" , RegLName:"" , RegEmail :"" ,RegPassword:"", RegConfirmPass:"" ,RegPhoneNumber:"" , RegBirthday:"" , RegNationality:"" , RegAdress:"" , RegCity:"" } ; 
        if (!values.RegFName) { errors.RegisterErr.RegFName = " Fullname required " }
        if (!values.RegLName) { errors.RegisterErr.RegLName = " Lastname required " }

        if (!values.RegEmail) { errors.RegisterErr.RegEmail = " Email required " }
        else if (!emailRegex.test(values.RegEmail)) { errors.RegisterErr.RegEmail = " Enter a valid Email " }

        if (!values.RegPassword) { errors.RegisterErr.RegPassword = "Password required " }
        else if (!passwordRegex.test(values.RegPassword)) { errors.RegisterErr.RegPassword = " Enter a valid password " }
        else if (values.RegPassword !== values.RegConfirmPass) { errors.RegisterErr.RegConfirmPass = "Passwords not matched " }

        if (!values.RegConfirmPass) { errors.RegisterErr.RegConfirmPass = " Confirm Pass required " }
        if (!values.RegPhoneNumber) { errors.RegisterErr.RegPhoneNumber = " Phone Number required " }
        if (!values.RegBirthday) { errors.RegisterErr.RegBirthday = " Birthday required " }
        if (!values.RegNationality) { errors.RegisterErr.RegNationality = " Nationality required " }
        if (!values.RegAdress) { errors.RegisterErr.RegAdress = " Address  required " }
        if (!values.RegCity) { errors.RegisterErr.RegCity = " City required " }


        setFormErrors(errors)
        return errors;

    }
   
    const ErrorCatch = () => {
        //setFormErrors(ValidationFun(Values));
        ValidationFun(Values);
    }

    const handlechange = (e) => {
        setValues({ ...Values, [e.target.name]: e.target.value });
    }

    const FindidLastElement = (url) => {
        axios.get(`https://autowash-api.herokuapp.com/${url}`)
            .then((res) => { setLastId(res.data.length + 1) })
    }

    useEffect(() => {

        FindidLastElement(url);
    })

    const SendData = (ErrorObj) => {
        console.log(Values);
        console.log(lastid);
        console.log(url);
        //console.log(ValidationFun(Values)[ErrorObj])
        //this RegisterErr must be changable depending on Which button you click 
        const Error = ValidationFun(Values)[ErrorObj];
        const ErrorState = Object.keys(Error).length === 0 ? true : false;

        if (ErrorState) {
            const userInfo = EmailExist(Values.RegEmail)
            if (!userInfo) {
                axios({
                    baseURL: "https://autowash-api.herokuapp.com/",
                    url: url, method: "post",
                    data: { id: lastid, data: Values, userToken: Token + Number(Values.RegPhoneNumber?Values.RegPhoneNumber:0) + lastid }
                })
                    .then((res) => {
                        setIssubmit(false);
                        setValues(sentValues);
                        alert("data sent successfully");
                    }).catch((err) => {
                        err = "error when data sending  ";
                        alert(" Error " + err)
                    })
            }
            else {
                alert("Email exist")
            }

        }



    }

    function LoginService() {

        const Error = ValidationFun(Values).SigninErr;
        const ErrorState = Object.keys(Error).length === 0 ? true : false;
        if (ErrorState) {
            var User = users?.filter((user,) => {
                return user.data.RegEmail === Values.LoginEmail && user.data.RegPassword === Values.LoginPassword
            })

            if (User.length !== 0) {
                console.log(User)
                console.log(User[0].userToken)
                localStorage.setItem("UserToken", JSON.stringify(User[0].userToken))
                dispatch(GetFetchedUser(User))
                window.location.replace("/AutoWash");
            } else {
                alert(" The Email or paswword may have error ")
            }

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

    return { Values, Formerrors, Issubmit, users, LoginService, ErrorCatch, setFormErrors, setIssubmit, ValidationFun, SendData, handlechange }
}