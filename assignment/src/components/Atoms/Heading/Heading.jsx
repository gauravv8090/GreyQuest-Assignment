

import React from 'react'

export default function Heading(prop) {
  return (
    <div>
        <h2>{prop.name}</h2>
        <h2>{prop.email}</h2>
        <h2>{prop.username}</h2>
        <h2>{prop.phone}</h2>
        <h2>{prop.address}</h2>
    </div>
  )
}
