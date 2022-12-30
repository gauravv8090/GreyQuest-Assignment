import React from 'react'
import Avatar from '../Card/Avatar/Avatar'
import Heading from '../Card/Heading/Heading'

export default function Template(el) {
  return (
    <div style={{ border: '2px solid grey', display:'grid', justifyContent:'center', width:'100%', height:'400px', borderRadius:'20px' }} >
        
        <Avatar name={el.name.name} />
        <div style={{  marginBottom:'-20px'}} >
        <Heading name={el.name.name} />
        </div>

        <div style={{display:'flex',margin:'auto', gap:'40px', marginTop:'-20px',
        alignItems:'center', justifyContent:'space-around', width:'100%'}} >

        <div style={{display:'flex', alignItems:'center'}} >
        <i className="fa-solid fa-user fa-xl" style={{marginRight:'15px'}} ></i>
        <Heading username={el.username.username} />
        </div>
        <div style={{display:'flex', alignItems:'center'}} >
        <i className="fa-solid fa-envelope fa-xl "style={{marginRight:'15px'}} ></i>
        <Heading email={el.email.email} />
        </div>

        </div>

        <div style={{display:'flex',margin:'auto', gap:'40px', marginTop:'-35px',
        alignItems:'center', justifyContent:'space-around', width:'100%'}} >

        <div style={{display:'flex', alignItems:'center'}} >
        <i className="fa-solid fa-phone fa-xl" style={{marginRight:'15px'}} ></i>
        <Heading username={el.phone.phone} />
        </div>
        <div style={{display:'flex', alignItems:'center'}} >
        <i className="fa-solid fa-city fa-xl "style={{marginRight:'15px'}} ></i>
        <Heading email={el.address.city} />
        </div>

        </div>

        <button style={{ marginBottom:'20px', borderRadius:'20px',
         width:'40%', margin:'auto', marginTop:'-10px', height:'40px'  }} >More Details</button>








    </div>
  )
}
