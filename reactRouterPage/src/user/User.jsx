import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userid}=useParams();
  return (
    <>
      <div className="bg-slate-400 text-3xl p-2">User:{userid}</div>
    </>
  )
}

export default User
