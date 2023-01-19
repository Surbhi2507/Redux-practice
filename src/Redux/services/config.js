import axios from "axios"
import Base_Url from "./basse_url"

export const getRequest = (url) =>{
return axios.get(`${Base_Url}${url}`)
}

// more funciton releted to post and put and delete 