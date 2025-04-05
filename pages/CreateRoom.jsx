import React, { useState } from "react";
import { motion } from "motion/react";
import { useAuth } from "../context/AppContext";
import axios from "axios";
import { LuClipboardCopy } from "react-icons/lu";

const JoinRoom = () => {
  const { user } = useAuth();
  const [roomId, setRoomId] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  
  const handleRoomAction = async (e) => {
    e.preventDefault();
    const endpoint = isCreating
      ? "/api/room/create-room"
      : "/api/room/join-room";
    try {
      const { data } = await axios.post(
        `http://localhost:3000${endpoint}`,
        { roomId },
        {
          headers: { Authorization: localStorage.getItem("token") },
        }
      );
      alert(data.message);
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen w-full text-white relative bg-[url()]">
      <div className="h-full w-full z-1 absolute flex flex-col md:flex-row">
        <motion.div
          initial={{ x: 0, y: 0 }}
          animate={{ x: [0, 40, 60, 0], y: [0, -30, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className="bg-circle-purple rounded-full h-[12vw] w-[12vw] absolute top-[20%] left-[55%] -translate-x-1/2 -translate-y-1/2"
        ></motion.div>
        <div className="w-full md:w-1/2 h-[20%] md:h-full flex flex-col items-center justify-center md:items-start md:justify-start pt-[10%] px-[5%]">
          <h1 className="text-[10vw] md:text-[4vw] uppercase font-semibold ">
            Welcome
          </h1>
          <p className="text-[2.5vw] text-center md:text-left md:text-[1.25vw]">
            {"Welcome " + user.username}
            <br />
            Immerse yourself in an exciting interactive story where your choices
            shape the adventure.
          </p>
        </div>
        <div className="w-full md:w-1/2 h-[80%] md:h-full flex items-center justify-center">
          <div className="relative w-[65%] h-[75%] flex flex-col items-center justify-center bg-gradient-to-b from-[#18AFE6] to-[#D508E7] p-1 md:p-1.5 overflow-hidden rounded-2xl">
            <div className="h-full w-full flex flex-col items-center justify-center py-[10%] relative bg-zinc-950 z-9 rounded-2xl">
              <h1 className="capitalize text-[5vw] md:text-[2.5vw] font-semibold">
                {isCreating ? "Create Room" : "Join Room"}
              </h1>
              <form
                className="mt-5 md:mt-10 w-full px-[10%]"
                onSubmit={handleRoomAction}
              >
                <input
                  type="text"
                  placeholder={
                    isCreating
                      ? "Enter Room ID to Create"
                      : "Enter Room ID to Join"
                  }
                  value={roomId}
                  onChange={(e) => setRoomId(e.target.value)}
                  name="roomId"
                  className="bg-black w-full border-[1px] border-white px-6 py-2 md:py-3 rounded-xl text-[3vw] md:text-[1.25vw] placeholder:text-white"
                  required
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 rounded-xl text-[3vw] md:text-[1.5vw] font-semibold border-2 border-white mt-4"
                >
                  {isCreating ? "Create Room" : "Join Room"}
                </button>
              </form>
              <button
                className="text-blue-400 mt-4"
                onClick={() => setIsCreating(!isCreating)}
              >
                {isCreating ? "Switch to Join Room" : "Switch to Create Room"}
              </button>
              {/* <div className="w-full flex flex-col items-center mt-6">
                <div className="w-[75%] ">
                  <p>Share</p>
                </div>
                <div>
                  <div className="flex items-center justify-center flex-col">
                    <button className="border-[1px] rounded-full p-2">
                      <LuClipboardCopy size={"1.25em"} />
                    </button>
                    <p className="text-[0.8vw]">Clipboard</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinRoom;
