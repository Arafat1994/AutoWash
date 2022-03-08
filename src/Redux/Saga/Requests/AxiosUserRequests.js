import axios from "axios";




export default function AxiosUseRequest (){
    return axios.request({
        baseURL:"https://autowash-api.herokuapp.com/RegisterData", 
        method:"get"
    })
}