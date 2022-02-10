import React from 'react';
import './WhatwedoComponentSingleelemet.scss';
const WhatwedoComponentSingleelemet = (props) => {
    const { id , imgsrc , header , somedetail} = props ; 
    return (
        <div className="whatwedoelement" key={id}>
            <div className="Whatwedoeledivimg">  <img src={imgsrc} alt="carwash" /> </div>
            <div className="whatwedoelementtext">
                <p> {header} </p>
                <p> {somedetail} </p>
            </div>
        </div>
    )
}
export default WhatwedoComponentSingleelemet; 