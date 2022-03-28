import React, { useLayoutEffect, useState } from "react";
import TitleOfComponent from "../Titleofanycomponent/TitleofComponent";
import './OurArticlesComponet.scss';
/*
import image1 from './../../Assets/images/post-1.jpg';
import image2 from './../../Assets/images/post-2.jpg';
import image3 from './../../Assets/images/post-2.jpg';
*/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getMainDataSelectr } from "../../Selectors/MainSelector";


export default function OurArticlesComponent(props) {

    const [ArticlesDataDiv, SetArticlesData] = useState(null);
    const {ArticlesData}= useSelector(getMainDataSelectr)
    //console.log(data)
    const eleNum = props.eleNum ? props.eleNum :ArticlesData.length;


    useLayoutEffect(() => {
        SetArticlesData(
            ArticlesData?.slice(0, eleNum).map((res) => {
                const { id, srcimage, header, details, commentNum, owner, field } = res;
                return (
                    <Link className="articleelement" to={`/BlogGrid/Blog_id=${id}`} key={id}>
                        <img src={require('./../../Assets/images'+srcimage).default} alt="article" />
                        <p className="header"> {header} </p>
                        <p className="details"> {details} </p>
                        <p className="footer">
                            <span> <FontAwesomeIcon className="icon" icon="comment-alt" /> <i> {commentNum} </i> </span>
                            <span> <FontAwesomeIcon className="icon" icon="user-alt" /> <i>{owner} </i> </span>
                            <span> <FontAwesomeIcon className="icon" icon="folder" /> <i> {field} </i>  </span>
                        </p>
                        <div className="date">  <p> 1 Jan 2015  </p>   </div>
                    </Link>
                )
            })
        )
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ArticlesData])

    return (
        <div className="articleContainer">
            <TitleOfComponent title="Our Blogs " header='Latest News & Articles' dirction='center' />
            <div className="articleDiv">
                {ArticlesDataDiv}
            </div>
        </div>
    )
}