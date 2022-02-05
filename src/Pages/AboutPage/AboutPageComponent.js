import React from 'react';
import BreifComponent from '../../Components/breifComponent/breifComponent';
import NumbersComponent from '../../Components/NumbersComponent/NumbersComponent';
import WorkersComponent from '../../Components/WorkersComponent/WorkersComponent';
import PagerHeader from './../../DynmaicComponent/pageHeader/pageHeader';
//import WhatwedoComponent from './../../Components/WhatwedoComponent/WhatwedoComponent';
//import BreifComponent from './../../Components/breifComponent/breifComponent' ; 
export default function AboutPageComponent() {
    return (
        <div className='MainAbout'>

            <PagerHeader />
            <BreifComponent />
            <NumbersComponent />
            <WorkersComponent />

            
        </div>
    )
}