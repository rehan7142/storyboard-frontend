import React from 'react'
import { useAuth } from '../context/AppContext'
function Home() {
  const {user} = useAuth();
  return (
    <div>
      <h1 className='text-zinc-100'>Hi , {user.username}</h1>
    </div>
  )
}

export default Home