import React from 'react';
import DynamicModal from '../../DynmaicComponent/DynamicModal/DynamicModal';
export default function Page404Component ()
{
    return(
        <div> 
            <DynamicModal header="Error" message=" the page you entered is here " />
        </div>
    )
}