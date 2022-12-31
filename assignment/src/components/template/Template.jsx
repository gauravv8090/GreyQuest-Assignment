import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../Atoms/Avatar/Avatar'
import Heading from '../Atoms/Heading/Heading'

export default function Template(el) {
  return (
    <div className='template' style={{  }} >
        
        <Avatar name={el.name.name} />
        <div className='temphead' >
        <Heading name={el.name.name} />
        </div>

        <div className='tempcontent' >

        <div className='tempdata' >
        <i className="fa-solid fa-user fa-xl" style={{marginRight:'15px'}} ></i>
        <Heading username={el.username.username} />
        </div>
        <div className='tempdata' >
        <i className="fa-solid fa-envelope fa-xl "style={{marginRight:'15px'}} ></i>
        <Heading email={el.email.email} />
        </div>

        </div>

        <div style={{display:'flex',margin:'auto', gap:'40px', marginTop:'-35px',
        alignItems:'center', justifyContent:'space-around', width:'100%'}} >

        <div className='tempdata' >
        <i className="fa-solid fa-phone fa-xl" style={{marginRight:'15px'}} ></i>
        <Heading username={el.phone.phone} />
        </div>
        <div className='tempdata' >
        <i className="fa-solid fa-city fa-xl "style={{marginRight:'15px'}} ></i>
        <Heading email={el.address.city} />
        </div>

        </div>

          
           
        <button style={{ marginBottom:'20px', borderRadius:'20px',border:'0',
         width:'40%', margin:'auto', marginTop:'-10px', height:'40px'  }} >
           
           <Link style={{textDecoration:'none', color:'black', fontSize:'16px'}}
           to={`/detail/${el.id}`} ><span>
           <i className="fa-solid fa-circle-info fa-lg "style={{marginRight:'15px'}} ></i>
         </span>More Details</Link>
             </button>








    </div>
  )
}
