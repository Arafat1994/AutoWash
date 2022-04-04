import React, { useState } from "react";
import './RegisterComponent.scss';
import UseValiationHook from './../../Hooks/CustomHookValidation';
import MainButtonComponent from "../../DynmaicComponent/AppointmentButtonComponent/MainButtonComponent";
import FormInputComponent from "../../DynmaicComponent/FormInputComponent/FormInputComponent";
import DynamicModal from "../../DynmaicComponent/DynamicModal/DynamicModal";
import {RegisterDataClass}  from './../../Services/RegisterDataToApi.js'
import { useSelector } from "react-redux";
import { getUsersSelector } from "../../Selectors/userSelector";


export default function RegisterComponent() {


    const RegisterData = { RegFName: "", RegLName: "", RegEmail: "", RegPassword: "", RegConfirmPass: "", RegPhoneNumber: "", RegBirthday: "", RegNationality: "", RegAdress: "", RegCity: "" };
    const url = "RegisterData";
    const { Values, Formerrors, ErrorCatch ,handlechange } = UseValiationHook(RegisterData, url);
    const inputs = [
        { id: 0, name: "RegFName", type: "text", placeholder: 'Type Your FirstName ', required: true, inputtype: "textbox" },
        { id: 1, name: "RegLName", type: "text", placeholder: 'Type your LastName  ', required: true, inputtype: "textbox" },
        { id: 2, name: "RegEmail", type: "email", placeholder: 'Type Your Email ', required: true, inputtype: "textbox" },
        { id: 3, name: "RegPassword", type: "password", placeholder: 'Type your password  ', required: true, inputtype: "textbox" },
        { id: 4, name: "RegConfirmPass", type: "password", placeholder: 'Password confirm ', required: true, inputtype: "textbox" },
        { id: 5, name: "RegPhoneNumber", type: "number", placeholder: 'Type your PhoneNumber  ', required: true, inputtype: "textbox" },
        { id: 6, name: "RegBirthday", type: "date", placeholder: 'Enter Your  Birhtday', required: true, inputtype: "textbox" },
        { id: 7, name: "RegNationality", type: "text", placeholder: 'Type your Nationality  ', required: true, inputtype: "textbox" },
        { id: 8, name: "RegAdress", type: "text", placeholder: 'Type Your Address ', required: true, inputtype: "textbox" },
        { id: 9, name: "RegCity", type: "text", placeholder: 'your  City  ', required: true, inputtype: "textbox" }
    ]
    const [ErrorModal , setErrormModal] = useState() ; 

   

    const Users = useSelector(getUsersSelector);
    const closeModalFun = ()=>{
        document.body.style.overflowY="auto";
        setErrormModal(null);
    }

    function RegisterUserFun(){
        const RegData = new RegisterDataClass(Values , url , ErrorCatch().RegisterErr , Users)
        const data =RegData.RegisterUserData(); 
        if(data){
            setErrormModal(<DynamicModal header={data.Error} message={data.Message} closeModal={closeModalFun} />)
        }
    }

    return (
        <>

            <div className="login_form   ">
                <div className="form">
                    {
                        inputs.map((res) => <FormInputComponent key={res.id} {...res} border="#202C45" value={Values[res.name]} onChange={handlechange} errormessage={Formerrors.RegisterErr[res.name]} />)
                    }
                    <MainButtonComponent onclick={RegisterUserFun} child="Register" font='white' back='#202C45' hoverfont='white' hoverback='#E81C2E' width="100%" />
                    
                </div>

            </div>
            {
                ErrorModal ? ErrorModal : <></>
            }


        </>
    )
}