import './Footercomponent.scss';
import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SocialmedialinksComponent from '../../DynmaicComponent/SocialmediaLinksComponent/SocialmedialinksComponent';
import data from './../../Assets/jsonFile/data.json';
import FormInputComponent from '../../DynmaicComponent/FormInputComponent/FormInputComponent';
import MainButtonComponent from '../../DynmaicComponent/AppointmentButtonComponent/MainButtonComponent';
import UseValiationHook from '../../Hooks/CustomHookValidation';



export default function Footercomponent(props) {
    const socialmediadata = data[0].SocialmediaData;
    const top = "0"
    const returneddata = data[0].FooterData;
    const returneddiv = returneddata.map((res) => {
        return (
            <div key={res.id} className='footerelement'>
                <p className='headerofelement'> {res.title}   </p>
                {
                    res.elements.map((result) => {
                        return (
                            <a key={result.id} href={result.link} className='linkelement'>
                                <FontAwesomeIcon icon={result.icon} className={result.iconClassName} />
                                <span className={result.spanClassName}> {result.spantext} </span>
                            </a>
                        )
                    })
                }
                {
                    res.title === "Get In Touch" ? <SocialmedialinksComponent socialmediaLinks={socialmediadata} top={top} /> : <> </>
                }
            </div>

        )
    })
    
    const inputs =[
        { id:0 , name:"fullname" , type:"text" , placeholder:'FullName' ,required:true   },
        { id:1 , name:"email" , type:"email" , placeholder:' Email ' ,required:true  }
    ];

    const sentValues ={fullname:"" , email:""} ;

    const { Values ,Formerrors ,Issubmit, ErrorCatch ,  SendData , handlechange  }=UseValiationHook(sentValues) ;

    useEffect(()=>{
        ErrorCatch() ;
        //eslint-disable-next-line
    } ,[Values])

    //console.log(Values) ; 

    /*
    const inputs =[
        { id:0 , name:"fullname" , type:"text" , placeholder:'FullName' ,required:true   },
        { id:1 , name:"email" , type:"email" , placeholder:' Email ' ,required:true  }
    ]
    const [values , setValues] = useState(  {fullname :"" , email:""  }) ;
    const [formErrors , setFormError] = useState({}) ;
    const [issubmit , setissubmit] = useState(false) ; 


    useEffect(()=>{
        //console.log(formErrors)
        if(Object.keys(formErrors).length=== 0 && values.fullname && values.email ){
            //console.log('true submit')
            setissubmit(true)
         }
         else{
             setissubmit(false) ; 
             //console.log('falsesubmit')
         }
    } , [formErrors , values.email , values.fullname])

    useEffect(()=>{
       setFormError(validation(values))
       //console.log("valuechanged");
    } , [values])

    const handlesubmit =(e)=>{ 
        e.preventdefault() ;
     }

    const handlechange =(e)=>{ 
        setValues({...values , [e.target.name] : e.target.value } )
        //setFormError(validation(values));
     }
    
    const validation =(values) =>{
        const errors={} ; 
        const fullnameRegex =new RegExp("^[A-zA-Z0-9_ ]{3,16}$"); 
        const emailRegex =/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if(!values.fullname) { errors.fullname=" fullname is required "}
        else if( !fullnameRegex.test(values.fullname) ){errors.fullname="fullname must have at least 3 chars and max 16 chars " }
        if(!values.email){ errors.email="email must be required " }
        else if(!emailRegex.test(values.email)) { errors.email="please enter a valid email "}

        return errors ; 
    }

    const SenData=()=>{
        axios({baseURL:"http://localhost:3001/" , url:"newsletterRequests" , method:'post' , data:{id: Math.floor(Math.random() * 10000) ,data:values } })
        .then((res)=>{
           setissubmit(false) ; 
           setValues({fullname:"" ,email:""}) ;
           alert("data sent successfully"); 
        })
    }
    */
    return (
        <div className='footercontainer'>
            {  returneddiv  }
            <div className='footerelement'>
                <p className='headerofelement'> Newsletter  </p>
                
                    {
                        inputs.map((res)=>{
                            return( <FormInputComponent key={res.id} {...res} value={Values[res.name]}  onChange={handlechange} errormessage={Formerrors[res.name]}  /> )
                        })
                    }
                    <MainButtonComponent onclick={SendData}  disabled={!Issubmit} child='Submit' font='#202C45' back='white' hoverfont="white" hoverback="#E81C2E" /> 
                
            </div>
        </div>
    )
}

