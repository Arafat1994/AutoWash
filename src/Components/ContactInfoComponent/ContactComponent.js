import "./ContactComponent.scss";
import React, {  useLayoutEffect, useState } from "react";
import TitleOfComponent from "../Titleofanycomponent/TitleofComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormInputComponent from "../../DynmaicComponent/FormInputComponent/FormInputComponent";
import MainButtonComponent from "../../DynmaicComponent/AppointmentButtonComponent/MainButtonComponent";
import UseValiationHook from "../../Hooks/CustomHookValidation";
import { useSelector } from "react-redux";


export default function ContactComponent(props) {


    const inputs = [
        { id: 0, name: "Contactfullname", type: "text", placeholder: 'FullName', required: true, inputtype: "textbox" },
        { id: 1, name: "ContactEmail", type: "email", placeholder: ' Email ', required: true, inputtype: "textbox" },
        { id: 2, name: "ContactSubject", type: "text", placeholder: "Subject", required: true, inputtype: "textbox" },
        { id: 3, name: "ContactMessage", type: "text", placeholder: "Message", required: true, inputtype: "textarea" },

    ];

    const sentValues = { Contactfullname: "", ContactEmail: "", ContactSubject: "", ContactMessage: "" };
    const url = "messagesRequests";
    const { Values, Formerrors, SendData, handlechange } = UseValiationHook(sentValues, url);


    // const returneddata = data[0].ContactData;
    const data = useSelector((state) => state.datareducer.data.ContactData);
    const [ContactData, SetContactData] = useState(null);

    useLayoutEffect(() => {
        SetContactData(
            data?.map((res) => {
                const { id, icon, header, details } = res;
                return (
                    <div key={id} className="contactelement">
                        <FontAwesomeIcon className="icon" icon={icon} />
                        <div className="text">
                            <p>  {header}   </p> <p> {details}   </p>
                        </div>
                    </div>
                )
            })
        )
    }, [data])

    return (
        <div className="ContactContainer">
            <TitleOfComponent dirction="center" header=" Contact For Any Query  " title="Get In Touch" />
            <div className="ContactDiv">
                <div className="leftContactSide">
                    <div className="header"> <p> Quick Contact Info  </p>  </div>
                    { ContactData }
                </div>
                <div className="RightContactSide">
                    {
                        inputs.map((res) => {
                            return (
                                <FormInputComponent key={res.id} {...res} value={Values[res.name]} onChange={handlechange} errormessage={Formerrors.ContactErr[res.name]} border="#202C45" />
                            )
                        })
                    }
                    <MainButtonComponent onclick={()=>{SendData("ContactErr")}}  child='Send Message ' font='white' back='#E81C2E' hoverfont="#E81C2E" hoverback="#202C45" width="100%" />

                </div>
            </div>
        </div>
    )
}