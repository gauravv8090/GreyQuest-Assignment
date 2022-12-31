import React from 'react'

export default function Avatar(prop) {
  return (
    <div className='AvatarBox' >
    <div  className='Avatar'  >
        <h1>
        {prop.name.split(" ")[0] == 'Mrs' || prop.name.split(" ")[0] == 'Mrs' ? prop.name.split(" ")[1][0] : prop.name.split(" ")[0][0]  }
        {prop.name.split(" ")[0] == 'Mrs' || prop.name.split(" ")[0] == 'Mrs' ? prop.name.split(" ")[2][0] : prop.name.split(" ")[1][0]  }
        </h1>
    </div>
    </div>
  )
}
