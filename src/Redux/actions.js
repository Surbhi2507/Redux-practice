import { data_type, Post_Type } from "./type";

export function getData(data){
    // console.log('action',data)
    return{
        type:data_type,
        payload:data,
    }
}

export function getPost(){
    console.log('action')
    return{
        type:Post_Type,
    }
}