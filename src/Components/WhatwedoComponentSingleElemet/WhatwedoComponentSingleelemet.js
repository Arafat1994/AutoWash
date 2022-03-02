import React from 'react';
import './WhatwedoComponentSingleelemet.scss';
import { Link } from "react-router-dom";

const WhatwedoComponentSingleelemet = (props) => {
    const { id, imgsrc, header, somedetail } = props;

    return (
        <Link to={`/Service/id=${id}&service=${header}`} className="whatwedoelement"  key={id} >
            <div className="Whatwedoeledivimg">  <img src={require('./../../Assets/images' + imgsrc).default} alt="carwash" /> </div>
            <div className="whatwedoelementtext">
                <p> {header} </p>
                <p> {somedetail} </p>
            </div>
        </Link>
    )
}
export default WhatwedoComponentSingleelemet; 