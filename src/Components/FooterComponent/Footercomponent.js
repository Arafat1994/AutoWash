import './Footercomponent.scss';
import React, { useLayoutEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SocialmedialinksComponent from '../../DynmaicComponent/SocialmediaLinksComponent/SocialmedialinksComponent';
import FormInputComponent from '../../DynmaicComponent/FormInputComponent/FormInputComponent';
import MainButtonComponent from '../../DynmaicComponent/AppointmentButtonComponent/MainButtonComponent';
import UseValiationHook from '../../Hooks/CustomHookValidation';
import { useSelector } from 'react-redux';


/*
const dataSelector = createSelector(
    (state)=>state.datareducer.data ,
    (datafun)=>datafun
) 
*/
export default function Footercomponent(props) {



    const footerdata = { NewsFullname: "", NewsEmail: "" };
    const url = "newsletterRequests";
    const { Values, Formerrors, SendData, handlechange } = UseValiationHook(footerdata, url);
    const top = "0"


    /*const socialdata = useSelector(dataSelector) ; 
    console.log(socialdata)*/
    const data = useSelector((state) => state.datareducer.data.FooterData);
    const social = useSelector((state) => state.datareducer.data.SocialmediaData);
    const [FooterData, SetFooterData] = useState(null);

    const inputs = [
        { id: 0, name: "NewsFullname", type: "text", placeholder: 'FullName', required: true, inputtype: "textbox" },
        { id: 1, name: "NewsEmail", type: "email", placeholder: ' Email ', required: true, inputtype: "textbox" }
    ];

    useLayoutEffect(() => {
        if (data && social) {
            SetFooterData(

                data?.map((res) => {
                    return (
                        <div key={res.id} className='footerelement'>
                            <p className='headerofelement'> {res.title}   </p>
                            {res.elements.map((result) => {
                                return (
                                    <a key={result.id} href={result.link} className='linkelement'>
                                        <FontAwesomeIcon icon={result.icon} className={result.iconClassName} />
                                        <span className={result.spanClassName}> {result.spantext} </span>
                                    </a>
                                )
                            })
                            }
                            {res.title === "Get In Touch" ? <SocialmedialinksComponent socialmediaLinks={social} top={top} /> : <> </>}
                        </div>
                    )
                })
            )
        }

    }, [data, social])

    console.log("userReq");

    return (
        <div className='footercontainer'>
            {FooterData}
            <div className='footerelement'>
                <p className='headerofelement'> Newsletter  </p>
                {
                    inputs.map((res) => {
                        return (<FormInputComponent key={res.id} {...res} value={Values[res.name]} onChange={handlechange} errormessage={Formerrors.NewsErr[res.name]} />)
                    })
                }
                <MainButtonComponent onclick={() => { SendData("NewsErr") }} child='Submit' font='#202C45' back='white' hoverfont="white" hoverback="#E81C2E" width="100%" />

            </div>
        </div>
    )

}

