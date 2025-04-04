import React from "react";

const GameInput = () => {
  return (
    <div className="h-screen w-full bg-zinc-950 flex">
      <div className="h-full w-[80%]">
        <div className="h-full w-[80%] background-zinc-950 absolute">
          <div className="z-99 bg-circle-purple rounded-full h-[12vw] w-[12vw] absolute top-0 left-0"></div>
          <div className="z-99 bg-circle-purple rounded-full h-[12vw] w-[12vw] absolute top-0 right-0"></div>
          <div className="z-99 bg-circle-green rounded-full h-[12vw] w-[12vw] absolute bottom-0 left-0"></div>
          <div className="z-99 bg-circle-green rounded-full h-[12vw] w-[12vw] absolute bottom-0 right-0"></div>
        </div>
        <div className="foreground h-full w-[80%] absolute z-999">
          <div className="h-full w-full flex flex-col items-center justify-center gap-5 px-[10%]">
            <p className="text-[2vw] capitalize font-medium bg-yellow-300 px-20 py-2 rounded-full">Shape your story</p>
            <textarea name="line" id="line" className="resize-none w-full h-[10vw] rounded-3xl bg-gradient-to-r from-[#18AFE6] to-[#D508E7] px-5 py-5 text-[2vw] font-medium outline-none" ></textarea>
            <div className="w-full">
              <button className="bg-gradient-to-r from-[#ffffff] to-[#D508E7] px-4 py-2 rounded-full text-[1.2vw] font-medium">Add line</button>
            </div>
            {/*<div className="spectators mt-10">
              <p className="text-[1.2vw] font-medium bg-gradient-to-r from-[#ffffff] to-[#D508E7] px-4 py-2 rounded-full">Spectators : </p>
            </div>*/}
          </div>
        </div>
      </div>
      <div className="h-full w-[20%] bg-gradient-to-b from-[#18AFE6] to-[#D508E7] chat flex justify-center py-4 px-6">
        <p className="h-fit bg-gradient-to-r from-[#03a3dd] to-[#D508E7] px-10 py-2 rounded-full text-[1.5vw] font-medium">Messeges</p>
      </div>
    </div>
  );
};

export default GameInput;
