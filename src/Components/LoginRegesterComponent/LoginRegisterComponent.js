
import React, { useEffect, useState  } from "react";
import LoginComponent from "../LoginComponent/LoginComponent";
import RegisterComponent from "../RegisterComponent/RegisterComponent";
import "./LoginRegisterComponent.scss";


/*
//example of geeting data users by using createselectors 
const datausers =createSelector(
    (state)=> { console.log("reselct") ;  return state.fetchusersreducer } , 
    (fetchusersreducer)=>fetchusersreducer.users
)*/

export default function LoginRegisterComponent() {

    //get users by originnal useselectors 
    //const data = useSelector((state)=>state.fetchusersreducer.users) ; 
    //get users by resellect (createselector and useselector ) to memoize data 
    //const data = useSelector(datausers) ; 
    const [defaultView, setDefaultView] = useState("login");

    let ChangeView = (e, View) => {
        let id;
        e ? id = e.target.id : id = 0
        //console.log(id)
        setDefaultView(View);
        document.getElementsByClassName("button")[id].classList.add("activelink")
    }
   

 
    useEffect((e) => 
    {
        if(defaultView){ ChangeView(e, defaultView) }
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