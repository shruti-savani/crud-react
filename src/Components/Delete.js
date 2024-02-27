import React from 'react'

function Delete({onClick}) {
  return (
    <div>
      <button className='delete-button' onClick={onClick}>Delete</button>
    </div>
  )
}

export default Delete
