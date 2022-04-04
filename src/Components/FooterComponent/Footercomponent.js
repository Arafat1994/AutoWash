import './Footercomponent.scss';
import React, { useLayoutEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SocialmedialinksComponent from '../../DynmaicComponent/SocialmediaLinksComponent/SocialmedialinksComponent';
import FormInputComponent from '../../DynmaicComponent/FormInputComponent/FormInputComponent';
import MainButtonComponent from '../../DynmaicComponent/AppointmentButtonComponent/MainButtonComponent';
import UseValiationHook from '../../Hooks/CustomHookValidation';
import { useSelector } from 'react-redux';
import { createSelector }  from "reselect"
import { RegisterDataClass } from '../../Services/RegisterDataToApi';
import DynamicModal from '../../DynmaicComponent/DynamicModal/DynamicModal';



const dataSelector = createSelector(
    (state)=>state.datareducer.data ,
    (datafun)=>datafun
) 

export default function Footercomponent(props) {



    const footerdata = { NewsFullname:"", NewsEmail:"" };
    const url = "newsletterRequests";
    const { Values, Formerrors, ErrorCatch , handlechange , setValues } = UseValiationHook(footerdata, url);
    const top = "0"; 
    const {FooterData , SocialmediaData} =useSelector(dataSelector);
    const [FooterDatadiv, SetFooterData] = useState(null);

    const inputs = [
        { id: 0, name: "NewsFullname", type: "text", placeholder: 'FullName', required: true, inputtype: "textbox" },
        { id: 1, name: "NewsEmail", type: "email", placeholder: ' Email ', required: true, inputtype: "textbox" }
    ];

    const [ErrorModal , SetErrorModal]=useState() ; 
    const closeModalFun=()=>{
        document.body.style.overflowY="auto";
        SetErrorModal(null);
    }

    useLayoutEffect(() => {
        if (FooterData && SocialmediaData) {
            SetFooterData(
                FooterData?.map((res) => {
                    const {id , title , elements}=res ; 
                    return (
                        <div key={id} className='footerelement'>
                            <p className='headerofelement'> {title}   </p>
                            {elements.map((result) => {
                                const {id , link , icon , iconClassName , spanClassName , spantext}= result ; 
                                return (
                                    <a key={id} href={link} className='linkelement'>
                                        <FontAwesomeIcon icon={icon} className={iconClassName} />
                                        <span className={spanClassName}> {spantext} </span>
                                    </a>
                                )
                            })
                            }
                            {res.title === "Get In Touch" ? <SocialmedialinksComponent socialmediaLinks={SocialmediaData} top={top} /> : <> </>}
                        </div>
                    )
                })
            )
        }
    }, [FooterData, SocialmediaData])


    function RegisterNewsLetterdataFun(){
        const RegData = new RegisterDataClass(Values , url , ErrorCatch().NewsErr , null ) ;
        const data = RegData.RegisterUserLetterData() ; 
        if(data){
            SetErrorModal(<DynamicModal header={data.Error} message={data.Message}  closeModal={closeModalFun} />)
        }
        setValues(footerdata)

    }

    return (
        <>
        <div className='footercontainer'>
            {FooterDatadiv}
            <div className='footerelement'>
                <p className='headerofelement'> Newsletter  </p>
                {
                    inputs.map((res) => {
                        return (<FormInputComponent key={res.id} {...res} value={Values[res.name]}  onChange={handlechange} errormessage={Formerrors.NewsErr[res.name]} />)
                    })
                }
                <MainButtonComponent onclick={RegisterNewsLetterdataFun} child='Submit' font='#202C45' back='white' hoverfont="white" hoverback="#E81C2E" width="100%" />
                
            </div>
        </div>
        {
            ErrorModal ? ErrorModal:<></>
        }

        </>
        
    )

}

