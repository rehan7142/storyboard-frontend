import React from "react";
import { FaHandHolding } from "react-icons/fa";

const GameInput = () => {
  return (
    <div className="h-screen w-full text-white bg-[url(l)] flex justify-center">
      <div className="h-full w-[80%]">
        <div className="foreground h-full w-[80%] absolute z-999">
          <div className="h-full w-full flex flex-col items-center justify-center gap-5 px-[10%]">
            <p className="text-[2vw] capitalize font-medium bg-gradient-to-r from-[#18AFE6] to-[#D508E7] px-20 py-2 rounded-full">Shape your story</p>

            <div className="w-[80%] h-[16vw] bg-gradient-to-r from-[#18AFE6] to-[#D508E7] p-[2px] rounded-3xl">
            <textarea name="line" id="line" className="resize-none w-full h-full rounded-3xl bg-zinc-950 px-5 py-5 text-[2vw] font-medium outline-none" value={line}  onChange={(e)=>{
              handleAddline(e.currentTarget.value)
            }}></textarea>
            </div>

            <div className="w-[80%]">
              <button className="bg-gradient-to-r from-[#18AFE6] to-[#D508E7] px-4 py-2 rounded-full text-[1.2vw] font-medium" onClick={()=>{
                if(!line.endsWith(".") && !line==""){
                  line = line + ". "
                }
                let newStory = story + line
                handleAddStory(newStory)
                handleAddline("")
              }}>Add line</button>
              <button className="ml-6 bg-gradient-to-r from-[#18AFE6] to-[#D508E7] px-4 py-2 rounded-full text-[1.2vw] font-medium" onClick={()=>{
                handleAddStory("")
                handleAddline("")
              }}>Clear current Story</button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="h-full w-[20%] chat px-4 flex items-center justify-center text-white">
        <div className="h-[75%] w-full p-[2px] bg-gradient-to-b from-[#D508E7] to-[#00c400]">
        <div className="chat-inside h-full w-full overflow-y-auto bg-zinc-950 py-6">
        <p className="h-fit w-full flex items-center justify-center text-[1.5vw] font-medium">Messages</p>
        <div className="messages flex flex-col items-center justify-center text-[1vw] mt-4">
        </div>
        </div>
        </div>
      </div> */}
    </div>
  );
};

export default GameInput;
