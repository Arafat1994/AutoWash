import "./ContactComponent.scss";
import React, { useEffect } from "react";
import TitleOfComponent from "../Titleofanycomponent/TitleofComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormInputComponent from "../../DynmaicComponent/FormInputComponent/FormInputComponent";
import MainButtonComponent from "../../DynmaicComponent/AppointmentButtonComponent/MainButtonComponent";
import data from './../../Assets/jsonFile/data.json'
import UseValiationHook from "../../Hooks/CustomHookValidation";


export default function ContactComponent(props) {


    const inputs = [
        { id: 0, name: "fullname", type: "text", placeholder: 'FullName', required: true, inputtype: "textbox" },
        { id: 1, name: "email", type: "email", placeholder: ' Email ', required: true, inputtype: "textbox" },
        { id: 2, name: "subject", type: "text", placeholder: "Subject", required: true, inputtype: "textbox" },
        { id: 3, name: "message", type: "text", placeholder: "Message", required: true, inputtype: "textarea" },

    ];

    const sentValues = { fullname: "", email: "", subject: "", message: "" };
    const url = "messagesRequests"
    const { Values, Formerrors, Issubmit, ErrorCatch, SendData, handlechange } = UseValiationHook(sentValues, url);

    useEffect(() => {
        ErrorCatch()
        //eslint-disable-next-line
    }, [Values])



    const returneddata = data[0].ContactData;

    const returneddiv = returneddata.map((res) => {
        return (
            <div key={res.id} className="contactelement">
                <FontAwesomeIcon className="icon" icon={res.icon} />
                <div className="text">
                    <p>  {res.header}   </p>
                    <p> {res.details}   </p>
                </div>
            </div>
        )
    });

    return (
        <div className="ContactContainer">
            <TitleOfComponent dirction="center" header=" Contact For Any Query  " title="Get In Touch" />
            <div className="ContactDiv">
                <div className="leftContactSide">
                    <div className="header"> <p> Quick Contact Info  </p>  </div>
                    {
                        returneddiv
                    }
                </div>
                <div className="RightContactSide">
                    {
                        inputs.map((res) => {
                            return (
                                <FormInputComponent key={res.id} {...res} value={Values[res.name]} onChange={handlechange} errormessage={Formerrors[res.name]} border="#202C45" />
                            )
                        })
                    }

                    <MainButtonComponent onclick={SendData} disabled={!Issubmit} child='Send Message ' font='white' back='#E81C2E' hoverfont="#E81C2E" hoverback="#202C45" />

                </div>
            </div>
        </div>
    )
}