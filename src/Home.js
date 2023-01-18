import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { getData } from './Redux/actions';

function Home() {

    const [fname,setFname]=useState("");
    const [email,setEmail]=useState("");

    const [count,setCount]=useState(0);

    const refname=useRef();
    const refemail=useRef();
    const dispatch = useDispatch();
    const data = useSelector((state) => state);

    useEffect(()=>{
        console.log(data);
        // console.log(count);
       
    },)

   
    function submitform(e)
    {
        e.preventDefault();
        const formData={
            fname:fname,
            email:email,
        }
        console.log(formData);
        dispatch(getData(formData));
        // console.log(data);
    }

  

  return (
    <div className='border-box'>
    <h1 className='text-style'>SUBSCRIBE</h1>
    <h5 className='text-style'>Sign Up with your email address to receive news & updates</h5>
    <form onSubmit={(e)=>submitform(e)} >
    <div>
        <input className="input-box" type="text" onChange={(e)=>setFname(e.target.value)} defaultValue={data.name} name="fname" placeholder='First Name'></input>
        <input className="input-box" name="email" onChange={(e)=>setEmail(e.target.value)} defaultValue={data.email} placeholder='Email'></input>
    </div>
        <button>Submit</button>
    </form>
  
    <div>
    {/* <nav>
            <NavLink to="/register"><button>Register</button></NavLink>
        </nav> */}
    </div>
      
</div>
  )
}

export default Home