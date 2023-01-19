import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../Redux/actions";

const Main = ()=>{
    const dispatch = useDispatch()
    const storeData = useSelector((state)=>state?.post?.post?.data)
    useEffect(()=>{
        getpostData()
    },[])
    useEffect(()=>{
    console.log('main',storeData)
    })
    const getpostData = ()=>{
        dispatch(getPost())
    }
    return(
        <div>
            {storeData.map((ele)=>{
                return(
                    <div style={{width:'100%',borderBottomWidth:1}}>
                    <h5>{ele?.id}</h5>
                    <h5>{ele?.userId}</h5>
                    <p>{ele?.title}</p>
                    <p>{ele?.body}</p>
                </div>
                )
            })}
           
        </div>
    )
}
export default Main