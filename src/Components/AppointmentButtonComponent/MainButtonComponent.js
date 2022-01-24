import React from 'react';
import './MainButtonComponent.scss';
import styled from 'styled-components';

function MainButtonComponent(props) {
   // console.log(props.details)
   // console.log(props.details.font,  props.details.back  , props.details.detailshover.font , props.details.hoverback  )
    //document.documentElement.style.setProperty("--font", props.details.font);
    //document.documentElement.style.setProperty("--back", props.details.back);
    //document.documentElement.style.setProperty("--hoverfont", props.details.hoverfont);
    //.documentElement.style.setProperty("--hoverback", props.details.hoverback);
        
    const MainButton =styled.button`
    color:${props.font}  ; 
    background:linear-gradient(to right,  ${props.hoverback} 50% , ${props.back} 50%);
    &:hover  {background-position:left bottom;  color:${props.hoverfont}  }
    `

    return (
        <div className='MainButton'>
            <MainButton className='appoint' onClick={props.onclick}  disabled={props.disabled}> {props.child} </MainButton>
        </div>
    )
}

export default React.memo(MainButtonComponent) ;