import React from 'react'
import Background from './Background'
import ForegroundLogin from './ForegroundLogin'

const Login = () => {
  return (
    <div className='h-full w-full text-white relative'>
        <Background />
        <ForegroundLogin />
    </div>
  )
}

export default Login