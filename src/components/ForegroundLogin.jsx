import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AppContext";

const ForegroundLogin = () => {
  const navigate = useNavigate()
  const {storeTokenInLs} =  useAuth();
  const [user , setUser] = useState({
    email: '',
    password: '',
  });
  const onSubmitHandler = async (e)=>{
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
      });
      if(response.ok){
        const data = await response.json();
        console.log(data)
        storeTokenInLs(data.token);
        setUser({
          email: '',
          password: '',
        })
        toast.success(data.message);
        navigate('/');
      }else{
        toast.error('Email or Password Is Wrong');
      }
      console.log(response);
    } catch (error) {
      console.log('login',error);
    }
  }
  const  handleInput = (e)=>{
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  }
  return (
    <div className="h-full w-full z-1 absolute flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 h-[20%] md:h-full flex flex-col items-center justify-center md:items-start md:justify-start pt-[10%] px-[5%]">
        <h1 className="text-[10vw] md:text-[4vw] uppercase font-semibold">Welcome</h1>
        <p className="text-[2.5vw] text-center md:text-left md:text-[1.25vw]">
          Welcome to TaleThread
          <br />
          Immerse yourself in an exciting interactive story where your choices
          shape the adventure.Login to begin your journey and see where the
          story takes you!
        </p>
      </div>
      <div className="w-full md:w-1/2 h-[80%] md:h-full flex items-center justify-center">
        <div
          id="login-form"
          className="relative w-[65%] h-[75%] flex flex-col items-center justify-center bg-zinc-950 p-1 md:p-1.5 overflow-hidden"
        >
          <div
            id="login-form-inside"
            className="h-full w-full flex flex-col items-center justify-center py-[10%] relative bg-zinc-950 z-9"
          >
            <h1 className="capitalize text-[5vw] md:text-[2.5vw] font-semibold">login</h1>
            <form onSubmit={onSubmitHandler} className="mt-5 md:mt-10 w-full px-[10%]">
              <input
                type="email"
                name="email"
                onChange={handleInput}
                value={user.email}
                placeholder="Email id"
                className="bg-black w-full border-[1px] border-white px-6 py-2 md:py-3 rounded-xl text-[3vw] md:text-[1.25vw] placeholder:text-white"
              />
              <input
                onChange={handleInput}
                value={user.password}
                type="password"
                name="password"
                placeholder="Password"
                className="bg-black w-full border-[1px] border-white px-6 py-2 md:py-3 rounded-xl text-[3vw] md:text-[1.25vw] placeholder:text-white mt-8"
              />
              <button
                id="submit-btn"
                type="submit"
                className="w-full px-4 py-2 rounded-xl text-[3vw] md:text-[1.5vw] font-semibold border-2 border-white mt-10"
              >
                Login
              </button>
            </form>
            <div className="mt-4 w-full flex items-center justify-between px-[10%]">
              <button className="text-[2.25vw] md:text-[1.25vw] font-medium">
                <Link to='/signup'>Sign Up?</Link>
              </button>
              <button className="text-[2.25vw] md:text-[1.25vw] font-medium">
                <Link to='/reset-password'>Forget Password?</Link>
              </button>
            </div>
            {/* <div className="my-2 w-full px-[8%] flex gap-5 items-center justify-between">
              <div className="w-[45%] h-[1px] bg-zinc-300"></div>
              <p className="text-[2.25vw] md:text-[1.25vw] font-medium">Or</p>
              <div className="w-[45%] h-[1px] bg-zinc-300"></div>
            </div>
            <div className="socials flex gap-5 mt-2">
              <div className="h-8 md:h-14 w-8 md:w-14 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100%"
                  height="100%"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#fbc02d"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                  <path
                    fill="#e53935"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  ></path>
                  <path
                    fill="#4caf50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  ></path>
                  <path
                    fill="#1565c0"
                    d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                </svg>
              </div>
              <div className="h-8 md:h-14 w-8 md:w-14 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100%"
                  height="100%"
                  viewBox="0 0 48 48"
                >
                  <linearGradient
                    id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1"
                    x1="9.993"
                    x2="40.615"
                    y1="9.993"
                    y2="40.615"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#2aa4f4"></stop>
                    <stop offset="1" stop-color="#007ad9"></stop>
                  </linearGradient>
                  <path
                    fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)"
                    d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
                  ></path>
                </svg>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForegroundLogin;
