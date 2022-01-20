import React from "react";
import TitleOfComponent from "../Titleofanycomponent/TitleofComponent";
import './washingPointcomponent.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data from './../../Assets/jsonFile/data.json';
import CarWashRequestcomponent from "../CarWashRequestcomponent/CarWashRequestcomponent";

export default function WashingPointcomponent() {


    const returneddata = data[0].WashingPointData;
    const returneddiv = returneddata.map((res) => {
        return (
            <div className="washingpoint " key={res.id}>
                <div className="mapicon"><FontAwesomeIcon className="icon" icon="map-marker-alt" /></div>
                <div className="details">
                    <p> { res.title}</p>
                    <p> {res.address} </p>
                    <p> Call: {res.phonenumber}  </p>
                </div>
            </div>
        )
    })

    return (
        <div className="WashingPointComponent">
            <TitleOfComponent title=' Washing Points  ' header="Car Washing & Car Points " dirction="center" />
            <div className="washingContainer">
                <div className="washingleftelement">
                    {
                    returneddiv
                    }
                </div>

                <div className="washingrightelement">
                    <CarWashRequestcomponent /> 
                </div>
            </div>
        </div>
    )
}