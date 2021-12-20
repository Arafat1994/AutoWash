import { useLayoutEffect, useState } from "react";


export default function Getwidth ()
{
    const [Width , setwidth] = useState (window.innerWidth) ; 
    const [AvailHeight , setAvailHeight]= useState(window.innerHeight) ; 
    
    
    useLayoutEffect(()=>{

        function updateSize(){

            setwidth(window.innerWidth) ;
            setAvailHeight(window.innerHeight); 
        }

        updateSize() ;
        window.addEventListener('resize' ,updateSize )
        
    }  , []) ; 
    

    return {Width , AvailHeight} 
}