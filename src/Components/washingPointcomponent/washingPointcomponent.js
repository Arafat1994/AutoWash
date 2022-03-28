import React, { useLayoutEffect, useState } from "react";
import TitleOfComponent from "../Titleofanycomponent/TitleofComponent";
import './washingPointcomponent.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CarWashRequestcomponent from "../CarWashRequestcomponent/CarWashRequestcomponent";
import { useSelector } from "react-redux";
import { getMainDataSelectr } from "../../Selectors/MainSelector";

export default function WashingPointcomponent() {


    // const returneddata = data[0].WashingPointData;
    const {WashingPointData} = useSelector(getMainDataSelectr)
    const [Washingposintdata, SetWashingPoint] = useState(null);

    useLayoutEffect(() => {
        SetWashingPoint(
            WashingPointData?.map((res) => {
                const { id, title, address, phonenumber } = res;
                return (
                    <div className="washingpoint " key={id}>
                        <div className="mapicon"><FontAwesomeIcon className="icon" icon="map-marker-alt" /></div>
                        <div className="details">
                            <p> {title}</p>
                            <p> {address} </p>
                            <p> Call: {phonenumber}  </p>
                        </div>
                    </div>
                )
            })
        )
    }, [WashingPointData])

    return (
        <div className="WashingPointComponent" >
            <div className="washingContainer">
                <div className="washingleftelement">
                    <TitleOfComponent title=' Washing Points  ' header="Car Washing & Car Points " dirction="left" margintop='0px' />
                    <div className="washingpointelement" >
                        {
                            Washingposintdata
                        }
                    </div>
                </div>

                <div className="washingrightelement">
                    <CarWashRequestcomponent />
                </div>
            </div>
        </div>
    )
}