import axios from "axios";
import { useState } from "react";
export default function UseValiationHook( sentValues ,  url) {


    const [Values, setValues] = useState(sentValues);
    const [Formerrors, setFormErrors] = useState({ContactErr:{},NewsErr:{}});
    const [Issubmit, setIssubmit] = useState(false);
    const [lastid, setLastId] = useState();


    const ValidationFun = (values) => {
        const  errors = {ContactErr:{},NewsErr:{} };
        const fullnameRegex = new RegExp("^[A-zA-Z0-9_ ]{3,16}$");
        const subjectRegex = new RegExp("^[A-zA-Z0-9_ ]{10,40}$");
        const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

        

        if (!values.Contactfullname ) { errors.ContactErr.Contactfullname = " Fullname required " }
        else if (!fullnameRegex.test(values.Contactfullname)) { errors.ContactErr.Contactfullname = "fullname must have at least 3 chars and max 16 chars  " }

        if (!values.ContactEmail) { errors.ContactErr.ContactEmail = " Email required " }
        else if (!emailRegex.test(values.ContactEmail)) { errors.ContactErr.ContactEmail = "Please enter A valid email " }

        if (!values.ContactSubject) { errors.ContactErr.ContactSubject = " Subject is required " }
        else if (!subjectRegex.test(values.ContactSubject)) { errors.ContactErr.ContactSubject = " subject must be at least 10 chars and maximum 40  chars " }

        if (!values.ContactMessage) { errors.ContactErr.ContactMessage = " Message  is required " }

        if(!values.NewsFullname){errors.NewsErr.NewsFullname= " Fullname required "}
        else if (!fullnameRegex.test(values.NewsFullname)) { errors.NewsErr.NewsFullname = "fullname must have at least 3 chars and max 16 chars  " }

        if(!values.NewsEmail){errors.NewsErr.NewsEmail="Email Required "}
        else if(!emailRegex.test(values.NewsEmail)){ errors.NewsErr.NewsEmail=" please Enter A valid Email "}
       

        return errors;

    }

    const handlechange = (e) => {
        setValues({ ...Values, [e.target.name]: e.target.value });
    }

    const idLastElement = (url) => {
        axios.get(`http://localhost:3001/${url}`)
            .then((res) => { setLastId(res.data.length) })
    }

    idLastElement(url);

    const SendData = () => {
        console.log(lastid)
        axios({ baseURL: "http://localhost:3001/", url: url, method: "post", data: { id: lastid , data: Values } })
            .then((res) => {
                setIssubmit(false);
                setValues(sentValues);
                alert("data sent successfully");
            })

    }

    //console.log(lastid )
    const ErrorCatch = () => {    
        setFormErrors(ValidationFun(Values));
    }
    
    return { Values, Formerrors , Issubmit ,  ErrorCatch, setFormErrors, setIssubmit, ValidationFun, SendData, handlechange }
}