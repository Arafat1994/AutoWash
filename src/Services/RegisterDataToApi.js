import axios from "axios";



export class RegisterDataClass {

    constructor(dataFromUser, destinationUrl, ErrorObject, Users) {

        this.dataFromUser = dataFromUser;
        this.destinationUrl = destinationUrl;
        this.ErrorObject = ErrorObject;
        this.Users = Users;
        this.lastId = this.Users?.length + 1;
    }

    Users;
    dataFromUser;
    destinationUrl;
    ErrorObject;
    lastId;
    baseURL ="https://autowash-api.herokuapp.com/";



    Token = () => {
        return (Math.floor(Math.random() * 1514000) + 1) + Number(this.dataFromUser.RegPhoneNumber ? this.dataFromUser.RegPhoneNumber : 0) + this.lastId;
    };

    ErrorStateFun = () => {
        const Errors = Object.keys(this.ErrorObject).length === 0 ? false : true;
        return Errors;
    }

    EmailExist = (InputEmail) => {
        const val = this.Users.find((user) => {
            if (user.data.RegEmail === InputEmail) {
                console.log("Email exist from func hook")
                return true
            }
            else {
                console.log("Email doesnot Exist from func hook ");
                return false
            }
        })
        console.log(val) //undefined if no user found here //user data if he found user with the sane data 
        return val;
    }

    RegisterUserData() {
        if (!this.ErrorStateFun()) {
            const UserInfo = this.EmailExist(this.dataFromUser.RegEmail);
            if (!UserInfo) {
                axios({
                    baseURL: this.baseURL,
                    data: { id: this.lastId, data: this.dataFromUser, userToken: this.Token() },
                    url: this.destinationUrl,
                    method: "post"
                })
                    .then((res) => {
                        localStorage.setItem("Token", res.data.userToken)
                        window.location.replace("/AutoWash")
                    })

            }
            else {
                return { Error: "Auth Error", Message: " The Email have already exist , Try Sign in   " }
            }
        }
        else {
            return { Error: "Error Message ", Message: " Error Found in the data you Entered " }
        }

    }

    RegisterUserLetterData() {
        //console.log(this.dataFromUser)
        if (!this.ErrorStateFun()) {
            axios({ baseURL: this.baseURL, url: this.destinationUrl, method: "post", data: { data: this.dataFromUser } })
            return { Error: "", Message: " data sent successfuly" }

        }
        else {
            return { Error: " Validation Error ", Message: "please enter a valid data " }
        }
    }

    RegisterContactData() {
        //console.log(this.dataFromUser);
        if (!this.ErrorStateFun()) {
            axios({ baseURL: this.baseURL, url: this.destinationUrl, method: "post", data: { data: this.dataFromUser } })
            return { Error: "", Message: " Message sent successfuly" }
        }
        else {
            return { Error: " Validation Error ", Message: "please enter a valid data " }
        }
    }


    RegisterCarWashRequest(){
        console.log(this.destinationUrl)
        if(!this.ErrorStateFun()){
            axios({baseURL:this.baseURL , url:this.destinationUrl , method:'post' , data : { data : this.dataFromUser}})
            return { Error:"" , Message : " Request Send Successfully  "}
        }
        else{
            return { Error:" Validtion Error " , Message :" Please enter a valid data " }
        }

    }

}

