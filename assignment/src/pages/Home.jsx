import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios  from 'axios';
import { useEffect } from 'react';
import { getuserlist } from '../redux/userSlice';
import Template from '../components/template/Template';

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
        return <h1>Loading....</h1>
    }

    if(error){
        return <h1>Error...</h1>
    }

  return (
    <div style={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)',gap:'20px', width:'80%', margin:'auto' , marginTop:'50px' }} >
        {
            userList.map((el)=>{
                return <div key={el.id} style={{  }} >
                    {/* <Heading name={el.email} /> */}
                    <Template name={el} email={el} username={el} phone={el} address={el.address} id={el.id}  />


                </div>
            })
        }
    </div>
  )
}
