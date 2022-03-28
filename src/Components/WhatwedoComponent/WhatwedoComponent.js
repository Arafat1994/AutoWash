import React, {  useLayoutEffect, useState } from "react";
import TitleOfComponent from "../Titleofanycomponent/TitleofComponent";
/*
import image from "./../../Assets/images/carwash.png";
import image2 from "./../../Assets/images/steering-wheel.png";
import image3 from "./../../Assets/images/vacuum.png";
import image4 from "./../../Assets/images/car-seat.png";
import image5 from "./../../Assets/images/car-repair.png";
import image6 from "./../../Assets/images/oil-change.png";
import image7 from "./../../Assets/images/wet-cleaning.png";
import image8 from "./../../Assets/images/window-cleaning.png";
*/
import './WhatwedoComponent.scss'
import WhatwedoComponentSingleelemet from "../WhatwedoComponentSingleElemet/WhatwedoComponentSingleelemet";
import {  useSelector } from "react-redux";
import { getMainDataSelectr } from "../../Selectors/MainSelector";



export default function WhatwedoComponent() {

    const [Whatwedocompo, setWhatwedocomp] = useState(null);
    const{WhatwedoComponent} = useSelector(getMainDataSelectr)
   


    useLayoutEffect(() => {
        setWhatwedocomp(
            WhatwedoComponent?.map((res) => {
                const { id, imgsrc, header, somedetail } = res;
                return (
                    <React.Fragment key={res.id}>
                        <WhatwedoComponentSingleelemet id={id} imgsrc={imgsrc} header={header} somedetail={somedetail} />
                    </React.Fragment>
                )
            })
        )
    }, [WhatwedoComponent])


    return (
        <div className="Whatwedo">
            <TitleOfComponent title='What We Do ? ' header="Premium Washing Services" dirction="center" />
            <div className="whatwedoContainer">
                {Whatwedocompo}
            </div>

        </div>
    )
}