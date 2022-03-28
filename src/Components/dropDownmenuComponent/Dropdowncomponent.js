
import React from "react";
import { useNavigate } from "react-router-dom";
import './DropDownComponent.scss'

export default function DropDownComponent({ dropdownele, id }) {

    const navigate = useNavigate();


    //

    return (

        <div className="dropdowncomponentcontainer" id={id} style={{ display: "none" }} >
            {
                dropdownele.map(
                    (result) => {
                        const { id, path, content } = result;
                        return (
                            <div key={id} to={path} className={result.class} onClick={() => navigate(path)}  >
                                {content}
                            </div>)
                    })
            }

        </div>



    )
}

