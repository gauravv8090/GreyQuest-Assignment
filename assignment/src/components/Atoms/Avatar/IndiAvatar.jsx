import React from 'react'

export default function IndiAvatar(prop) {
  return (
    <div  >
    <div className='indiavatardiv'  >
        <h1>
        {prop.name.split(" ")[0] == 'Mrs' || prop.name.split(" ")[0] == 'Mr' ? prop.name.split(" ")[1][0] : prop.name.split(" ")[0][0]  }
        {prop.name.split(" ")[0] == 'Mrs' || prop.name.split(" ")[0] == 'Mr' ? prop.name.split(" ")[2][0] : prop.name.split(" ")[1][0]  }
        </h1>
    </div>
    </div>
  )
}
