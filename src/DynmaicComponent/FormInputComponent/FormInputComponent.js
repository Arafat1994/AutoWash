import './FormInputComponent.scss'
import React, { useState } from 'react';
import  styled , {  css } from 'styled-components';


const sharedinputCss = css`
 border : ${props => props.border ? `1px solid ${props.border}` : '1px solid white'} ;
 color : ${props => props.border ? `${props.border}` : 'white'}  ; 
 ::placeholder  { color:${props => props.border ? `${props.border}` : 'white'} ;  }
`

const Input = styled.input.attrs(props => ( { "data-focused" : props.focused } ) )`
    ${sharedinputCss} ;
    height:40px;
 `

const Textarea = styled.textarea.attrs(props => ( { "data-focused" : props.focused } ) )`
   ${sharedinputCss} ;
   height:150px ; 
 `;

export default function FormInputComponent(props) {
    const { id, errormessage, inputtype, onChnage, ...inputprops } = props;
    const [focused, setFocused] = useState(false);

    const handlefocus=(e)=> { setFocused(true) }
   
   
    return (
        <div className='Formdiv'>
            {inputtype === "textbox" ?
                <Input className='forminput' onChange={onChnage} onFocus={handlefocus}    {...inputprops}    border={props.border}  focused={focused.toString()} /> :
                <Textarea className='forminput' onChange={onChnage} onFocus={handlefocus} {...inputprops}    border={props.border}  focused={focused.toString()} />
            }
            <span className='errormessage'> {errormessage} </span>
        </div>

    )
}