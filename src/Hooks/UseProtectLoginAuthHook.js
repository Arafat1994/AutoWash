




export default function UseProtectLoginAuthHook() {
 
   const IsAuth =()=>{
    const UserToken = JSON.parse(localStorage.getItem("Token"));
    if (UserToken){
        return true
    }
    else{
        return false
    }
   }

   return {IsAuth} ; 

}
