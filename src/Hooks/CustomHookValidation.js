import axios from "axios";
import {  useState } from "react";
export default function UseValiationHook(sentValues) {

    const [Values, setValues] = useState(sentValues);
    const [Formerrors, setFormErrors] = useState({});
    const [Issubmit, setIssubmit] = useState(false);

    const ValidationFun = (values) => {
        const errors = {};
        const fullnameRegex = new RegExp("^[A-zA-Z0-9_ ]{3,16}$");
        const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!values.fullname) { errors.fullname = " Fullname required " }
        else if (!fullnameRegex.test(values.fullname)) { errors.fullname = "fullname must have at least 3 chars and max 16 chars  " }
        if (!values.email) { errors.email = " Email required " }
        else if (!emailRegex.test(values.email)) { errors.email = "Please enter A valid email " }

        return errors;


    }

    const handlechange = (e) => {
        setValues({ ...Values, [e.target.name]: e.target.value }) ;            
    }
    
    const SendData = () => {
        axios({ baseURL: "http://localhost:3001/", url: "newsletterRequests", method: "post", data: { id: Math.floor(Math.random() * 10000), data: Values } })
            .then((res) => {
                setIssubmit(false);
                setValues({ fullname: "", email: "" });
                alert("data sent successfully");
            })

    }
    
    const ErrorCatch=()=>{
        if(Object.keys(Formerrors).length=== 0 && Values.fullname && Values.email ){
            setIssubmit(true) ;
         }
         else{
            setIssubmit(false) ;  
         } 
         setFormErrors(ValidationFun(Values));
    }
    //console.log(Formerrors)

    return { Values, Formerrors, Issubmit, ErrorCatch , setFormErrors, setIssubmit, ValidationFun, SendData, handlechange }
}