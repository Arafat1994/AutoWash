import React from 'react';
import './MainButtonComponent.scss';

export default function MainButtonComponent(props) {
    return (
        <div className='MainButton'>
            <button className='appoint' > {props.child} </button> 
        </div>
    )
}