import React from 'react' ; 

import Getwidth from './../../Hooks/GetwidthHook' ; 
export default function HomePage()
{

    const {Width}=Getwidth();
    return(
        <div> 
            
            <div> home page  {Width} </div>

        </div>
    )
}