




export default function UseProtectLoginAuthHook() {
 
   const IsAuth =()=>{
    const UserToken = JSON.parse(localStorage.getItem("UserToken"));
    if (UserToken){
        return true
    }
    else{
        return false
    }
   }

   return {IsAuth} ; 

}
