import React from 'react'

export default function Avatar(prop) {
  return (
    <div style={{width:'100%',display:'flex',alignItems:'center', justifyContent:'center', }} >
    <div style={{height:'100px',display:'flex',alignItems:'center', justifyContent:'center',
     width:'100px', borderRadius:'50%', backgroundColor:'skyblue', marginTop:'15px', marginBottom:'-10px' }} >
        <h1>
        {prop.name.split(" ")[0] == 'Mrs' || prop.name.split(" ")[0] == 'Mrs' ? prop.name.split(" ")[1][0] : prop.name.split(" ")[0][0]  }
        {prop.name.split(" ")[0] == 'Mrs' || prop.name.split(" ")[0] == 'Mrs' ? prop.name.split(" ")[2][0] : prop.name.split(" ")[1][0]  }
        </h1>
    </div>
    </div>
  )
}
