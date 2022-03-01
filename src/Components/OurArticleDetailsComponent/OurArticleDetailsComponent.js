import React, { useLayoutEffect } from 'react' ; 
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FetchService, RemoveSelectedFetchedService } from '../../Redux/Actions/Actions';
import './OurArticleDetailsComponent.scss'

export default function OurArticleDetailsComponent() {

    const {id}=useParams(); 
    const dispatch = useDispatch() ;
    const data = useSelector((state)=>state.fetchservicereduver) ;
    //console.log(data)
    //console.log(id)
    useLayoutEffect(()=>{
        dispatch(FetchService({id:id ,  keyComponent:"ArticlesData" }))
        return ()=>{dispatch(RemoveSelectedFetchedService());  }
    },[dispatch , id ])

  return (
    <div className='whatwecandodetailsDiv'>
            <div className='header'>
                <p> {data?.header}</p>
            </div>
            <div className='images'>
                {data?.srcimage ? <img className='image' src={require('./../../Assets/images' + data?.srcimage).default} alt="nnnn" /> : ""}
            </div>
            <div className='details'>
                <p>{data?.details}</p>
            </div>
        </div>
  )
}
