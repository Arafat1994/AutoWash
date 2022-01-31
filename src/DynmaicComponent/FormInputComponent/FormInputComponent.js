import'./FormInputComponent.scss'
import React, { useState } from 'react'; 

export  default function FormInputComponent(props){
    const { id , errormessage , onChnage , ...inputprops } = props  ; 
    const [ focused , setFocused] = useState(false) ;

    const handlefocus =(e)=>{ setFocused(true)  }
    return(
        <div className='Formdiv'>
            <input  className='forminput' onChange={onChnage} onFocus={handlefocus} {...inputprops} focused={focused.toString()}   />
            <span> { errormessage } </span>
        </div> 
        
    )
}