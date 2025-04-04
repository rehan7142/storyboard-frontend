import React from "react";

const GameInput = () => {
  return (
    <div className="h-screen w-full bg-[url(https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2V2eGdqOXY2ZWxia3poY2hvbDU1ZGdta3AybGE0anQzaGx2YTg4NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/94P1LEMyuVEeA/giphy.gif)] flex">
      <div className="h-full w-[80%]">
        <div className="foreground h-full w-[80%] absolute z-999">
          <div className="h-full w-full flex flex-col items-center justify-center gap-5 px-[10%]">
            <p className="text-[2vw] capitalize font-medium bg-gradient-to-r from-[#18AFE6] to-[#D508E7] px-20 py-2 rounded-full">Shape your story</p>

            <div className="w-[75%] h-[16vw] bg-gradient-to-r from-[#18AFE6] to-[#D508E7] p-[2px] rounded-3xl">
            <textarea name="line" id="line" className="resize-none w-full h-full rounded-3xl bg-zinc-950 px-5 py-5 text-[2vw] font-medium outline-none" ></textarea>
            </div>

            <div className="w-[75%]">
              <button className="bg-gradient-to-r from-[#18AFE6] to-[#D508E7] px-4 py-2 rounded-full text-[1.2vw] font-medium">Add line</button>
            </div>
            {/*<div className="spectators mt-10">
              <p className="text-[1.2vw] font-medium bg-gradient-to-r from-[#ffffff] to-[#D508E7] px-4 py-2 rounded-full">Spectators : </p>
            </div>*/}
          </div>
        </div>
      </div>
      <div className="h-full w-[20%] chat px-4 flex items-center justify-center text-white">
        <div className="h-[75%] w-full p-[2px] bg-gradient-to-b from-[#D508E7] to-[#00c400]">
        <div className="chat-inside h-full w-full overflow-y-auto bg-zinc-950 py-6">
        <p className="h-fit w-full flex items-center justify-center text-[1.5vw] font-medium">Messages</p>
        <div className="messages flex flex-col items-center justify-center text-[1vw] mt-4">
          <p>User : Messages</p>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default GameInput;
