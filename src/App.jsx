import React, { useEffect } from 'react'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Home from '../pages/Home'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import ResetPassword from '../pages/ResetPassword'
import Logout from '../pages/Logout'
import { useAuth } from '../context/AppContext'
import Room from '../pages/Room'
import GameInput from '../pages/GameInput'
// import CreateRoom from '../pages/CreateRoom'
import JoinRoom from '../pages/CreateRoom'
const App = () => {
  const {isLoggedIn} = useAuth();
  const navigate = useNavigate()
  const PrivateRoute = ({element}) => {
    const { isLoggedIn } = useAuth();
    return isLoggedIn ? element : <Navigate to="/login" />;
  }
  useEffect(()=> {
    console.log(isLoggedIn);
    if(isLoggedIn){
      // navigate('/')
    }
  }, [isLoggedIn , navigate])
  return (
    <div className='h-screen w-full bg-zinc-950 overflow-hidden'>
      <Routes>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/' element={isLoggedIn ? (<Room />) : (<Navigate to = '/login' />)}/>
        
        <Route path='/logout' element={<Logout />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/story-board' element={<GameInput />} />
        <Route path='/join-room' element={isLoggedIn ? (<JoinRoom/>) : (<Navigate to = '/login' />)} />
      </Routes>
    </div>
  )
}

export default App