
import React, { useEffect, useState } from "react";
import LoginComponent from "../LoginComponent/LoginComponent";
import RegisterComponent from "../RegisterComponent/RegisterComponent";
import "./LoginRegisterComponent.scss";

export default function LoginRegisterComponent() {

    const [defaultView, setDefaultView] = useState("login");

    let ChangeView = (e, View) => {
        let id;
        e ? id = e.target.id : id = 0
        //console.log(id)
        setDefaultView(View);
        document.getElementsByClassName("button")[id].classList.add("activelink")

    }


    useEffect((e) => { ChangeView(e, defaultView)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div className="log_regs">
            <div className="log_reg_buttons">
                <button id="0" className={defaultView === "login" ? "button activelink" : "button"} onClick={(e) => ChangeView(e, "login")}  > Signin  </button>
                <button id="1" className={defaultView === "register" ? "button activelink" : "button"} onClick={(e) => ChangeView(e, "register")}> Register </button>

            </div>
            <>
                {
                    defaultView === "login" ? <> <LoginComponent /> </> : <> <RegisterComponent /> </>
                }
            </>
        </div>
    )
}