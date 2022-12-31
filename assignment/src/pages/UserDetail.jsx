import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { getuserdetail } from '../redux/userSlice';
import IndividualUser from '../components/template/IndividualUser';

export default function UserDetail() {


    const  { id } = useParams();
    console.log(id); 

    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    // const [data, setData] = useState({});


    const userDetail = useSelector((state)=> state.user.userDetail);
    const dispatch = useDispatch();
    
    const getUsers = ()=>{

        setLoading(true);

        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res)=>{
            dispatch(getuserdetail(res.data))
            // getuserlist(res.data);
            setLoading(false)
            // console.log(res.data)
        }).catch((err)=>setError(true)).then(()=>setLoading(false))
        
    }
    console.log(userDetail);

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
    <div  className='WholeIndividualPage'  >
          
          <IndividualUser name={userDetail} avatar={userDetail} address={userDetail}   />

        
    </div>
  )
}
