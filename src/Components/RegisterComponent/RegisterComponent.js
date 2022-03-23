import React from "react";
import './RegisterComponent.scss';
import UseValiationHook from './../../Hooks/CustomHookValidation';
import MainButtonComponent from "../../DynmaicComponent/AppointmentButtonComponent/MainButtonComponent";
import FormInputComponent from "../../DynmaicComponent/FormInputComponent/FormInputComponent";

export default function RegisterComponent() {

    const RegisterData = { RegFName: "", RegLName: "", RegEmail: "", RegPassword: "", RegConfirmPass: "", RegPhoneNumber: "", RegBirthday: "", RegNationality: "", RegAdress: "", RegCity: "" };
    const url = "RegisterData";
    const { Values, Formerrors , handlechange, SendData } = UseValiationHook(RegisterData, url);
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
    

    return (
        <div className="login_form   ">
            <div className="form">
                {
                    inputs.map((res) => <FormInputComponent key={res.id} {...res} border="#202C45" value={Values[res.name]} onChange={handlechange} errormessage={Formerrors.RegisterErr[res.name]} />)
                }
                <MainButtonComponent onclick={()=>{SendData("RegisterErr")}}  child=" Register " font='#202C45' back='White' hoverfont='white' hoverback='#E81C2E' width="100%" />
            </div>

        </div>
    )
}