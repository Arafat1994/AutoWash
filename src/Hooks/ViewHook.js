import { useState } from "react";

export default  function  UseViewFunctionHook ()
{

    const [view , setview] = useState(false) ; 

    function viewfunction() { !view ? setview(true) : setview(false); } 

    return {view , viewfunction }
}