import { useLayoutEffect, useState } from "react";


export default function Getwidth ()
{
    const [Width , setwidth] = useState (window.innerWidth) ; 
    
    
    useLayoutEffect(()=>{

        function updateSize(){

            setwidth(window.innerWidth) ;
        }

        updateSize() ;
        window.addEventListener('resize' ,updateSize )
        
    }  , []) ; 
    

    return {Width} 
}