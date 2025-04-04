import React, { use } from "react";
import { CiMenuFries } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { useAuth } from "../context/AppContext";
import { Link } from "react-router-dom";

const Room = () => {
    const {user} = useAuth();
  return (
    <div className="h-screen w-full bg-zinc-950 absolute">
      <div className="backgound h-full w-full bg-zinc-950 absolute">
        <div className="z-99 bg-circle-purple rounded-full h-[12vw] w-[12vw] absolute top-0 left-0"></div>
        <div className="z-99 bg-circle-purple rounded-full h-[12vw] w-[12vw] absolute top-0 right-0"></div>
        <div className="z-99 bg-circle-green rounded-full h-[12vw] w-[12vw] absolute bottom-0 left-0"></div>
        <div className="z-99 bg-circle-green rounded-full h-[12vw] w-[12vw] absolute bottom-0 right-0"></div>
      </div>
      <div className="foreground h-full w-full text-white absolute z-99 py-5 px-10">
        <nav className="flex h-[5%] w-full items-center justify-end gap-10">
          <FaRegUserCircle size={"3em"} />
          <button className="bg-[#55A4E6] text-[1.5vw] px-3 py-1 rounded-full">Log Out</button>
        </nav>
        <div className="h-[95%] flex items-center justify-center gap-14">
          <div>
            <div className="flex flex-col gap-2">
              <p className="linear-gradient-text text-[5vw] font-semibold leading-none">
                Welcome,
              </p>
              <p className="linear-gradient-text text-[3vw] font-semibold leading-none">
                {user.username}
              </p>
            </div>
            <div className="buttons flex gap-8 mt-15">
              <button className="bg-gradient-to-r from-[#18AFE6] to-[#D508E7] px-4 py-2 rounded-full text-black font-medium text-2xl">
                <Link to = '/join-room'>Lets go</Link>
              </button>
            </div>
          </div>
          <div>
            <img src="/src/assets/Woman Coding GIF by Pluralsight.gif" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
