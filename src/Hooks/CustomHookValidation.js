import axios from "axios";
import { useEffect, useState } from "react";
export default function UseValiationHook(sentValues, url) {


    const [Values, setValues] = useState(sentValues);
    const [Formerrors, setFormErrors] = useState({ ContactErr: {}, NewsErr: {}, SigninErr: {}, RegisterErr: {} });
    const [Issubmit, setIssubmit] = useState(false);
    const [lastid, setLastId] = useState();

    const Token = Math.floor(Math.random() * 1514000) + 1;

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


        return errors;

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


    const SendData = () => {
        console.log(lastid);
        console.log(url)
        axios({ baseURL: "https://autowash-api.herokuapp.com/", url: url, method: "post", data: { id: lastid, data: Values, userToken: Token + Number(Values.RegPhoneNumber) + lastid } })
            .then((res) => {
                setIssubmit(false);
                setValues(sentValues);
                alert("data sent successfully");
            }).catch((err) => {
                err = "error when data sending  ";
                alert(" Error " + err)
            })

    }

    //console.log(lastid )
    const ErrorCatch = () => {
        setFormErrors(ValidationFun(Values));
    }

    return { Values, Formerrors, Issubmit, ErrorCatch, setFormErrors, setIssubmit, ValidationFun, SendData, handlechange }
}