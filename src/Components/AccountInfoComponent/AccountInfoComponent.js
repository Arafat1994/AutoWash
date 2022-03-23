import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './AccountInfoComponent.scss';

export default function AccountInfoComponent() {

  const [userData, SetUserData] = useState();


  const Userinfo = useSelector((state) => state.fetchusersreducer.user);

  //console.log(Userinfo)
  useEffect(() => {
    if (Userinfo.length > 0) { SetUserData(Userinfo[0].data) }
  }, [Userinfo])

  /* 
  useEffect(() => {
     
     if (data) {
       console.log(data)
       console.log("data found ")
       var userinfoArr=[] ; 
       //here we take the object and change it to array to make loop on it 
       Object.keys(data).forEach(key => userinfoArr.push({ data: data[key]} ))
       setUserInfoArray(userinfoArr)
     }
 
   }, [data])*/

    
  return (
    <div className='userInfoDiv'  >
      {
        userData ?
          <>
            <section>
              <p className='mainPara'> Username </p>
              < p className='header'> {userData.RegFName + ' ' + userData.RegLName} </p>
            </section>
            <section>
              <p className='mainPara'> Email </p>
              <p className='header'> {userData.RegEmail} </p>
            </section>
            <section>
              <p className='mainPara'> Password </p>
              <p className='header' > {userData.RegPassword} </p>
            </section>
            <section>
              <p className='mainPara'> Birthday </p>
              <p className='header'> {userData.RegBirthday} </p>
            </section>
            <section>
              <p className='mainPara'> Nathionality </p>
              <p className='header'> {userData.RegNationality} </p>
            </section>
            <section>
              <p className='mainPara'> Address  </p>
              <p className='header'> {userData.RegAdress + " , " + userData.RegCity}  </p>
            </section>
          </>
          :
          ""
      }
      

     
    </div>
  )
}
