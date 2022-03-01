import React, { useLayoutEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FetchService, RemoveSelectedFetchedService } from '../../Redux/Actions/Actions';
import './whatwecandodetails.scss';

export default function WhatwedoComponentdetails() {

    const { id } = useParams();
    const dispatch = useDispatch()
    const data = useSelector((state) => state.fetchservicereduver)


    useLayoutEffect(() => {
        dispatch(FetchService({ id: id, keyComponent: 'WhatwedoComponent' }))

        return () => { dispatch(RemoveSelectedFetchedService()) }
    }, [dispatch , id])




    /* 
    useEffect(() => {
         //console.log(Servicename)
         const returneddata = allServices?.filter((data) => {
             console.log(data.header);
             return data.header === Servicename;
         })
 
         //console.log(returneddata)
         SetSelectedElement(returneddata);
     }, [])
     */


    return (
        <div className='whatwecandodetailsDiv'>
            <div className='header'>
                <p> {data?.header}</p>
            </div>
            <div className='images'>
                {data?.imgsrc ? <img className='image' src={require('./../../Assets/images' + data?.imgsrc).default} alt="nnnn" /> : ""}
            </div>
            <div className='details'>
                <p>{data?.somedetail}</p>
            </div>



        </div>
    )
}
