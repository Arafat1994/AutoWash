import './SocialmedialinksComponent.scss';
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from 'styled-components';
const Socialmedia = styled.div`
    top:${ props => props.top}
    
    `

export default function SocialmedialinksComponent(props) {

    const returneddata = props.socialmediaLinks;
    //console.log(props.top)
   // console.log(props.socialmediaLinks)

    const returneddiv = returneddata?.map((res) => {
        return (
            <a href={res.link} className='socialmedialink' key={res.id}>
                <FontAwesomeIcon className='icon icon2' icon={["fab", res.icon]} />
            </a>
        )
    })
    return (
        <Socialmedia className='socialmediadiv' top={props.top}>
            {
                returneddiv
            }
        </Socialmedia>
    )
}