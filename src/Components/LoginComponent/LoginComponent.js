import React, { useState } from "react";
import UseValiationHook from './../../Hooks/CustomHookValidation';
import './LoginComponent.scss'
import MainButtonComponent from "../../DynmaicComponent/AppointmentButtonComponent/MainButtonComponent";
import FormInputComponent from "../../DynmaicComponent/FormInputComponent/FormInputComponent";
import { LoginService } from "../../Services/LoginService";
import { useDispatch, useSelector } from "react-redux";
import { getUsersSelector } from "../../Selectors/userSelector";
import { GetFetchedUser } from "../../Redux/Actions/Actions";
import DynamicModal from "../../DynmaicComponent/DynamicModal/DynamicModal";


function LoginComponent() {

    const inputs = [
        { id: 0, name: "LoginEmail", type: "email", placeholder: 'Type Your email ', required: true, inputtype: "textbox" },
        { id: 1, name: "LoginPassword", type: "text", placeholder: 'Type your password  ', required: true, inputtype: "textbox" }
    ];
    const [ErorrModal , setErrormModal]= useState(); 
    const url = "RegisterData";
    const signinData = { LoginEmail: "", LoginPassword: "" }
    const { Values, Formerrors , ErrorCatch , handlechange } = UseValiationHook(signinData, url);

    const Users = useSelector(getUsersSelector)
    const dispatch = useDispatch() ; 

    const closeModalFun=()=>{
        document.body.style.overflowY="auto";
        setErrormModal(null);
    }

    function LoginFun(){
        var  login = new LoginService(Values , Users ,ErrorCatch().SigninErr  ); 
        var user = login.UserLogin() ;
       if(user?.length===1){
            dispatch(GetFetchedUser(user)) ; 
            window.location.replace("/AutoWash")
        } 
        else if(user?.Error && user?.Message){
            setErrormModal(<DynamicModal header={user?.Error} message={user?.Message} closeModal={closeModalFun} />) ;
        }
    }


    return (
        <>
            <div className="login_form   ">
                <div className="form">

                    {
                        inputs.map((res) => <FormInputComponent key={res.id} {...res} border="#202C45" value={Values[res.name]} onChange={handlechange} errormessage={Formerrors.SigninErr[res.name]} />)
                    }
                    <MainButtonComponent onclick={LoginFun} child="Sign-in" font='white' back='#202C45' hoverfont='white' hoverback='#E81C2E' width="100%" />
                </div>

            </div>
            {
                ErorrModal ? ErorrModal : <></>
            }
        </>
    )
}



export default React.memo(LoginComponent);