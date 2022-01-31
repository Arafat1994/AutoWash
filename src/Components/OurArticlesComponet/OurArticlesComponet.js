import React from "react";
import TitleOfComponent from "../Titleofanycomponent/TitleofComponent";
import './OurArticlesComponet.scss';
/*
import image1 from './../../Assets/images/post-1.jpg';
import image2 from './../../Assets/images/post-2.jpg';
import image3 from './../../Assets/images/post-2.jpg';
*/
import data from './../../Assets/jsonFile/data.json' ; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function OurArticlesComponent(){
    //console.log(image1 , image2 , image3 ); 
    const returneddata=data[0].ArticlesData; 
    const returneddiv = returneddata.map((res)=>{
        return(
            <a className="articleelement" href={res.to} key={res.id}>
                    <img src={res.srcimage} alt="article" />
                    <p className="header"> { res.header} </p>
                    <p className="details"> {res.details} </p>
                    <p className="footer">
                        <span> <FontAwesomeIcon className="icon" icon="comment-alt" /> <i> {res.commentNum} </i> </span>
                        <span> <FontAwesomeIcon className="icon" icon="user-alt" /> <i>{res.owner} </i> </span>
                        <span> <FontAwesomeIcon className="icon" icon="folder" /> <i> {res.field} </i>  </span>
                    </p>
                    <div className="date">  <p> 1 Jan 2015  </p>   </div> 
                </a> 
        )

    })
    return(
        <div className="articleContainer"> 
            <TitleOfComponent  title="Our Blogs " header='Latest News & Articles' dirction='center' />
            <div className="articleDiv">
                {
                    returneddiv
                }
            </div>

         </div>
    )
}