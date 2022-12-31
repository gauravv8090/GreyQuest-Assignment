import React from 'react'
import IndiAvatar from '../Atoms/Avatar/IndiAvatar'
import Heading from '../Atoms/Heading/Heading'

export default function IndividualUser(el) {

    const {city} = el.address.address;
    console.log(city, "city");


  return (
    <div className='individualCard' >

        <div className='indiavatar' >
        <IndiAvatar name={el.avatar.name} />
        </div>
        <div className='indicontent' >

        <div className='indiheading' >
        <h1 style={{fontSize:'45px', fontFamily:'sans-serif'}} >{el.name.name}</h1>
        </div>



       <div className='indiuserDiv'  >
       <i className="fa-solid fa-user fa-xl" style={{marginRight:'15px'}} ></i>
        <Heading email={el.name.username} />
       </div>
       <div className='indiuserDiv' >
       <i className="fa-solid fa-envelope fa-xl" style={{marginRight:'15px'}} ></i>
        <Heading email={el.name.email} />
       </div>
       <div className='indiuserDiv' >
       <i className="fa-solid fa-phone fa-xl" style={{marginRight:'15px'}} ></i>
        <Heading email={el.name.phone} />
       </div>
       <div className='indiuserDiv' >
       <i className="fa-solid fa-globe fa-xl" style={{marginRight:'15px'}} ></i>
        <Heading email={el.name.website} />
       </div>

        <div className='indiuserDiv' >
       <i className="fa-solid fa-briefcase fa-xl" style={{marginRight:'15px'}} ></i>
        <Heading email={el.name.company.name} />
        </div>
        <div className='indiuserDiv' >
       <i className="fa-solid fa-location-dot fa-xl" style={{marginRight:'15px'}} ></i>
        <Heading email={el.name.address.city} /><h2>, </h2>
        <Heading email={el.name.address.street} /><h2>, </h2>
        <Heading email={el.name.address.suite} />
        </div>


        </div>
    </div>
  )
}
