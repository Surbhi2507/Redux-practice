import { useDispatch } from "react-redux";
import { data_type } from "./type";

export function getData(data){
    // console.log('action',data)
    return{
        type:data_type,
        payload:data,
    }
}