import axios from "axios"



export default function  AxiosFetchService () {
     return axios.request({
        baseURL:`https://autowash-api.herokuapp.com/AllData` , 
        method:"get"
    })
}