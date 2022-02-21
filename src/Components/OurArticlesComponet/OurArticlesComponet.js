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


export default function OurArticlesComponent(props) {

    const [ArticlesData, SetArticlesData] = useState(null);
    const data = useSelector((state) => state.datareducer.data.ArticlesData);
    const eleNum = props.eleNum ? props.eleNum : data.length;


    useLayoutEffect(() => {
        SetArticlesData(
            data?.slice(0, eleNum).map((res) => {
                const { id, to, srcimage, header, details, commentNum, owner, field } = res;
                return (
                    <a className="articleelement" href={to} key={id}>
                        <img src={srcimage} alt="article" />
                        <p className="header"> {header} </p>
                        <p className="details"> {details} </p>
                        <p className="footer">
                            <span> <FontAwesomeIcon className="icon" icon="comment-alt" /> <i> {commentNum} </i> </span>
                            <span> <FontAwesomeIcon className="icon" icon="user-alt" /> <i>{owner} </i> </span>
                            <span> <FontAwesomeIcon className="icon" icon="folder" /> <i> {field} </i>  </span>
                        </p>
                        <div className="date">  <p> 1 Jan 2015  </p>   </div>
                    </a>
                )
            })
        )
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    return (
        <div className="articleContainer">
            <TitleOfComponent title="Our Blogs " header='Latest News & Articles' dirction='center' />
            <div className="articleDiv">
                {ArticlesData}
            </div>
        </div>
    )
}