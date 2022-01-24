import React, { useCallback, useEffect, useState } from "react";
import MainButtonComponent from "../AppointmentButtonComponent/MainButtonComponent";
import './CarWashRequestcomponent.scss';
import axios from 'axios';



export default function CarWashRequestcomponent() {
    const Fullname = React.useRef();
    const Email = React.useRef();
    const Description = React.useRef();


    const requestData ={ id: Math.floor(Math.random() * 10000), fullname: "", email: "", description: "" }
    const [formValues, setFormValues] = useState(requestData);
    const [formErrors, setFormError] = useState({});
    const [submit, setsubmit] = useState(false);


    //with every change in text  we change values and apply validation  

    const changehandler = (e) => {
        e.preventDefault();
        
        const { name, value } = e.target;

        setFormValues({ ...formValues, [name]: value });

    }
    
    const checkdatavalidation = (e) => {
        e.preventDefault();
        setFormError(Validate(formValues));
    }

    const Validate = (values) => {
        const errors = {};
        var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!values.fullname) { errors.fullname = "fullname is required " }

        if (!values.email) { errors.email = "email is requied " }
        else if (values.email && !regex.test(values.email)) { errors.email = " enter valid email format " }

        if (!values.description) { errors.description = "description is required " }
        else if (values.description && values.description.length < 20) { errors.description = " you must enter more than 20 char " }
        return errors;
    }

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && formValues.fullname && formValues.email && formValues.description) {
            setsubmit(true);
            console.log(formValues)
        }
        else {
            setsubmit(false)
        }
    }, [formErrors , formValues])

    const senddata = () => {
        axios({ baseURL: "http://localhost:3001/", url: "/carWashRequests", method: 'post', data: formValues })
            .then(() => {
                setsubmit(false);
                setFormValues(requestData)
            })
    }
    const callbackfunc = useCallback(senddata, [formValues , requestData]);

    return (
        <div className="carWashRequest">
            <div className="title"><p> Request  Car Wash  </p> </div>
            <div className="formele">
                <input type="text" className="inputfield" name="fullname" value={formValues.fullname} ref={Fullname}
                    onChange={changehandler} onBlur={checkdatavalidation}
                    required />
                <span className="label"> Full name </span>
                <p className="validateText"> {formErrors.fullname} </p>
            </div>
            <div className="formele">
                <input type="text" className="inputfield" name="email" value={formValues.email} ref={Email}
                    onChange={changehandler}  onBlur={checkdatavalidation}
                    required />
                <span className="label"> Email  </span>
                <p className="validateText"> {formErrors.email}</p>
            </div>
            <div className="formele">
                <textarea className="inputfield textarea" name="description" value={formValues.description} ref={Description}
                    onChange={changehandler}  onBlur={checkdatavalidation}
                    required />
                <span className="label textarealabel"> Description </span>
               <p className="validateText">  {formErrors.description} </p>
            </div>
            <MainButtonComponent onclick={callbackfunc} disabled={!submit} child=' Send Request ' font="#E81C2E" back="white" hoverfont="white" hoverback="#202C45" />

        </div>
    )
}


/*

export default function CarWashRequestcomponent() {

    const Fullname = React.useRef();
    const Email = React.useRef();
    const Description = React.useRef();

    const changehandler = (event) => {
        axios({ baseURL: "http://localhost:3001", url: "/carWashRequests", method: 'post', data: {
            id: Math.floor(Math.random() * 10000) ,  fullname:Fullname.current.value , email:Email.current.value , description:Description.current.value
        } })
            .then(() => {
                console.log("data added ")
                Fullname.current.value = Email.current.value = Description.current.value =null ;
            })


    }
    const sentrequestinfo = useCallback(changehandler, []);



    return (
        <div className="carWashRequest">
            <div className="title"><p> Request  Car Wash  </p> </div>
            <div className="formele">
                <input type="text" className="inputfield" name="fullname" ref={Fullname} required />
                <span className="label"> Full name </span>
            </div>
            <div className="formele">
                <input type="text" className="inputfield" name="email" ref={Email} required />
                <span className="label"> Email  </span>
            </div>
            <div className="formele">
                <textarea className="inputfield textarea" name="description" ref={Description} required />
                <span className="label textarealabel"> Description </span>
            </div>
            <MainButtonComponent onclick={sentrequestinfo} child=' Send Request ' font="#E81C2E" back="white" hoverfont="white" hoverback="#202C45" />

        </div>
    )
} 
*/
/*
$mainredcolor : #E81C2E ; 
$mainblackcolor : #202C45 ; 
$WhiteColor : White ;
*/