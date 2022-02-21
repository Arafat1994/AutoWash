import axios from "axios"



export default function UseLoginHook(Values) {

    //const [ Usersdata , SetUserdata ]
    
    const users = async () => {
        const response = await axios.get(" http://localhost:3001/RegisterData");
       console.log(response.data)
       console.log(Values) ;
    }
 
    users();
    

    return { users }

}