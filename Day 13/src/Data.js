// Name
// Roll
// Bio
import React from 'react'

const Data = ({name, roll, bio}) => {
  return (
    <div>
        <h3>{name}</h3>
        <p>{roll}</p>
        <p>{bio}</p>
    </div>
  )
}

export default Data