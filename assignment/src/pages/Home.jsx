import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios  from 'axios';
import { useEffect } from 'react';
import { getuserlist } from '../redux/userSlice';
import Template from '../components/template/Template';
import { CircularProgress } from "react-loading-indicators";

export default function Home() {



    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const userList = useSelector((state)=> state.user.userList);
    const dispatch = useDispatch();
    
    const getUsers = ()=>{

        setLoading(true);

        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
            dispatch(getuserlist(res.data))
            // getuserlist(res.data);
            setLoading(false)
            // console.log(res.data)
        }).catch((err)=>setError(true)).then(()=>setLoading(false))
        
    }
    console.log(userList);

    useEffect(()=>{
        getUsers();
    }, [])

    if(loading){
        return <div className='loading' >
            <CircularProgress color='skyblue' size='large' />
        </div> 
    }

    if(error){
        return <h1>Error...</h1>
    }

  return (
    <div className='home' >
        {
            userList.map((el)=>{
                return <div key={el.id}  >
                    <Template name={el} email={el} username={el} phone={el} address={el.address} id={el.id}  />
                </div>
            })
        }
    </div>
  )
}
