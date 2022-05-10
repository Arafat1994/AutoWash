import React, { useEffect, useState } from "react";
import MainButtonComponent from "./../../DynmaicComponent/AppointmentButtonComponent/MainButtonComponent";
import './CarWashRequestcomponent.scss';
import FormInputComponent from "../../DynmaicComponent/FormInputComponent/FormInputComponent";
import UseValiationHook from "../../Hooks/CustomHookValidation";
import { RegisterDataClass } from "../../Services/RegisterDataToApi";
import DynamicModal from "../../DynmaicComponent/DynamicModal/DynamicModal";



export default function CarWashRequestcomponent() {
    const WashReqdetails = { ReqFullname: "", ReqEmail: "", ReqDescription: "" };
    const url = "carWashRequests";
    const { Values, Formerrors, ErrorCatch, handlechange, setValues } = UseValiationHook(WashReqdetails, url);
    const inputs = [
        { id: 0, name: "ReqFullname", type: "text", placeholder: 'FullName', required: true, inputtype: "textbox" },
        { id: 1, name: "ReqEmail", type: "email", placeholder: ' Email ', required: true, inputtype: "textbox" },
        { id: 2, name: "ReqDescription", type: "text", placeholder: "Enter your Message", required: true, inputtype: "textarea" }
    ];


    const [ErrorModal, SetErrorModal] = useState();
    const closeModalFun = () => {
        document.body.style.overflowY = "auto";
        SetErrorModal(null);
    }

    function SendWashRequestFun() {
        console.log(Values);
        console.log(url);
        console.log(ErrorCatch().WashRequestErr)
        const RegData = new RegisterDataClass(Values, url, ErrorCatch().WashRequestErr, null);
        const data = RegData.RegisterCarWashRequest();
        if (data) {
            SetErrorModal(<DynamicModal header={data.Error} message={data.Message} closeModal={closeModalFun} />)
        }
        //setValues(WashReqdetails)
    }

    return (
        <>
        <div className="carWashRequest">
            <div className="title"><p> Request  Car Wash  </p> </div>
            {
                inputs.map((res) => { return (<FormInputComponent key={res.id} {...res} value={Values[res.name]} onChange={handlechange}  errormessage={Formerrors.WashRequestErr[res.name]}  />) })
            }
            <MainButtonComponent onclick={SendWashRequestFun} child=' Send Request ' font="#E81C2E" back="white" hoverfont="white" hoverback="#202C45" width="100%" />
        </div>
        {
            ErrorModal ? ErrorModal :<></>
        }
        </>

    )


}