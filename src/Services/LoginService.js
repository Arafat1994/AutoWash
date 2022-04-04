


export class LoginService {
    Values;
    Users;
    ErrorObject;
    constructor(Values, Users, ErrorObject) {
        this.Values = Values;
        this.Users = Users;
        this.ErrorObject = ErrorObject;
    }


    UserLogin() {
        const inputErrors = Object.keys(this.ErrorObject).length === 0 ? true : false ;
        if (inputErrors) {
            var User = this.Users.filter((user) =>{ return user.data.RegEmail === this.Values.LoginEmail && user.data.RegPassword === this.Values.LoginPassword} )
            if(User.length!==0){
                
                localStorage.setItem("Token" , JSON.stringify(User[0].userToken));
                return User ; 
               
            }
            else{
               return {Error : "Error Message" , Message : "The Email or password may have Errors "}
            }

        }
       
    }

    /*

    const Error = ValidationFun(Values).SigninErr;
        const ErrorState = Object.keys(Error).length === 0 ? true : false;
        if (ErrorState) {
            var User = users?.filter((user) => {
                return user.data.RegEmail === Values.LoginEmail && user.data.RegPassword === Values.LoginPassword })

            if (User.length !== 0) {
                localStorage.setItem("UserToken", JSON.stringify(User[0].userToken))
                dispatch(GetFetchedUser(User))
                window.location.replace("/AutoWash");
            } else {
                setErrormModal(<DynamicModal header="Authentication Error " message=" The Email or Password May Have Error  " closeModalFun={closeModal} />)
            }

        }*/

}