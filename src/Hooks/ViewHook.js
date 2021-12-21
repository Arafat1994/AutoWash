import { useState } from "react";

export default  function  ViewFunctionHook ()
{

    const [view , setview] = useState(false) ; 

    function viewfunction() { !view ? setview(true) : setview(false); } 

    return {view , viewfunction }
}