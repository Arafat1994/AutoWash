import React, { useLayoutEffect, useState } from "react";
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
import { useSelector } from "react-redux";


export default function WhatwedoComponent() {

    //console.log(image, image2, image3, image4, image5, image6, image7, image8);
    const [Whatwedocompo, setWhatwedocomp] = useState(null);
    //let dataFromJson = data[0].WhatwedoComponent;
    //console.log(dataFromJson)
    const data = useSelector((state) => state.datareducer.data.WhatwedoComponent);
    useLayoutEffect(() => {
        setWhatwedocomp(
            data?.map((res) => {
                const { id, imgsrc, header, somedetail } = res;
                return (
                    <React.Fragment key={res.id}>
                        <WhatwedoComponentSingleelemet id={id} imgsrc={imgsrc} header={header} somedetail={somedetail} />
                    </React.Fragment>
                )
            })
        )
    }, [data])


    return (
        <div className="Whatwedo">
            <TitleOfComponent title='What We Do ? ' header="Premium Washing Services" dirction="center" />
            <div className="whatwedoContainer">
                {Whatwedocompo}
            </div>

        </div>
    )
}