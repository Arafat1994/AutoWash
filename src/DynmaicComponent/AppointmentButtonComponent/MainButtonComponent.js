import React from 'react';
import './MainButtonComponent.scss';
import styled from 'styled-components';

const MainButton = styled.button`

color:${props => props.font}  ;
width:${props => props.width ? props.width : "auto"  }  ; 
background:linear-gradient(to right,  ${props => props.hoverback} 50% , ${props => props.back} 50%);
&:hover  {background-position:left bottom;  color:${props => props.hoverfont}  }
`

function MainButtonComponent(props) {
    /*
    console.log(props.details)
    console.log(props.details.font,  props.details.back  , props.details.detailshover.font , props.details.hoverback  )
    document.documentElement.style.setProperty("--font", props.details.font);
    document.documentElement.style.setProperty("--back", props.details.back);
    document.documentElement.style.setProperty("--hoverfont", props.details.hoverfont);
    documentElement.style.setProperty("--hoverback", props.details.hoverback);

   if you want to pass changed values to styled componet 
  -you must put styled compponent out side function component 
   -pass the values as props when you call button  
   */

   const {onclick , disabled , font , back , hoverfont , hoverback  ,  width , child } = props ;
return (
    <div className='MainButton'>
        <MainButton className='appoint'  onClick={onclick} disabled={disabled}  font={font} back={back} hoverfont={hoverfont} hoverback={hoverback} width={width}>
            {child}
        </MainButton>
        {
            //div> <input type={text} placeholder="enter your data here plleasre" /> </div>
        }
        
    </div>
)
}

export default React.memo(MainButtonComponent);