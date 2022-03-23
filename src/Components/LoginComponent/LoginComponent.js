import React, { useEffect, useState } from "react";
import UseValiationHook from './../../Hooks/CustomHookValidation';
import './LoginComponent.scss'
import MainButtonComponent from "../../DynmaicComponent/AppointmentButtonComponent/MainButtonComponent";
import FormInputComponent from "../../DynmaicComponent/FormInputComponent/FormInputComponent";


function LoginComponent() {

    const inputs = [
        { id: 0, name: "LoginEmail", type: "email", placeholder: 'Type Your email ', required: true, inputtype: "textbox" },
        { id: 1, name: "LoginPassword", type: "text", placeholder: 'Type your password  ', required: true, inputtype: "textbox" }
    ];
    const url = "RegisterData";
    const signinData = { LoginEmail: "", LoginPassword: "" }
    const { Values, Formerrors, LoginService, handlechange } = UseValiationHook(signinData, url);
    

    

    return (
        <div className="login_form   ">
            <div className="form">
                
                {
                     inputs.map((res) => <FormInputComponent key={res.id} {...res} border="#202C45" value={Values[res.name]} onChange={handlechange} errormessage={Formerrors.SigninErr[res.name]} />)
                }
                <MainButtonComponent onclick={LoginService} child="Sign-in" font='#202C45' back='White' hoverfont='white' hoverback='#E81C2E' width="100%" />
            </div>

        </div>
    )
}



export default React.memo(LoginComponent);