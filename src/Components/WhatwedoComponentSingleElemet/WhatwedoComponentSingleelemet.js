import React from 'react';
import './WhatwedoComponentSingleelemet.scss';
const WhatwedoComponentSingleelemet = (props) => {

    return (
        <div className="whatwedoelement" key={props.id}>
            <div className="Whatwedoeledivimg">  <img src={props.imgsrc} alt="carwash" /> </div>
            <div className="whatwedoelementtext">
                <p> {props.header} </p>
                <p> {props.somedetail} </p>
            </div>
        </div>
    )
}
export default WhatwedoComponentSingleelemet; 