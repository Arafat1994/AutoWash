import React, { useEffect , useLayoutEffect } from "react";
import UseValiationHook from './../../Hooks/CustomHookValidation';
import './LoginComponent.scss'
import MainButtonComponent from "../../DynmaicComponent/AppointmentButtonComponent/MainButtonComponent";
import FormInputComponent from "../../DynmaicComponent/FormInputComponent/FormInputComponent";
import UseLoginHook from "../../Hooks/UseLoginHook";
import { useDispatch, useSelector } from "react-redux";
import { GetUser } from "../../Redux/Actions/Actions";


export default function LoginComponent() {
    const inputs = [
        { id: 0, name: "LoginEmail", type: "email", placeholder: 'Type Your email ', required: true, inputtype: "textbox" },
        { id: 1, name: "LoginPassword", type: "text", placeholder: 'Type your password  ', required: true, inputtype: "textbox" }
    ];
    const url ="RegisterData" ;
    const signinData = {LoginEmail:"" ,LoginPassword:""   }
    const { Values, Formerrors , Issubmit,setIssubmit , ErrorCatch , handlechange  } = UseValiationHook(signinData , url);
     

    
    const dispatch = useDispatch() ; 
    const Users =useSelector((state)=>state.fetchusersreducer.users) ;
    const {  LoginService} = UseLoginHook(Values , Users);

    useEffect(()=>{
        dispatch(GetUser())
    }, [dispatch])


    useLayoutEffect(() => {  
        ErrorCatch()
        //eslint-disable-next-line
    }, [ Values.LoginEmail, Values.LoginPassword ])
    
    
    useEffect(()=>{
        if(Object.keys(Formerrors.SigninErr).length === 0 ) { setIssubmit(true)}
        else{ setIssubmit(false)  }
    })




    return (
        <div className="login_form   ">
            <div className="form"> 
                {
                    inputs.map((res) => <FormInputComponent key={res.id} {...res} border="#202C45" value={Values[res.name]} onChange={handlechange} errormessage={Formerrors.SigninErr[res.name]}  />)
                }
                <MainButtonComponent onclick={LoginService}  disabled={!Issubmit}  child="Sign-in"  font='#202C45' back='White' hoverfont='white' hoverback='#E81C2E' width="100%" /> 
            </div>

        </div>
    )
}