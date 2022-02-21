import axios from "axios";




export default function AxiosRequests(id) {
  return axios.request({
      baseURL:`https://autowash-api.herokuapp.com/${id}`,
      method:"get"
  })
}
