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

        <div className='tempphone' >

        <div className='tempdata' >
        <i className="fa-solid fa-phone fa-xl" style={{marginRight:'15px'}} ></i>
        <Heading username={el.phone.phone} />
        </div>
        <div className='tempdata' >
        <i className="fa-solid fa-city fa-xl "style={{marginRight:'15px'}} ></i>
        <Heading email={el.address.city} />
        </div>

        </div>

          
           
        <button className='tempbtn' >
           
           <Link className='linkcss'
           to={`/detail/${el.id}`} ><span>
           <i className="fa-solid fa-circle-info fa-lg "style={{marginRight:'15px'}} ></i>
         </span>More Details</Link>
             </button>

    </div>
  )
}
