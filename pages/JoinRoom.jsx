// import React from 'react'
// import { motion } from "motion/react";
// import { useAuth } from '../context/AppContext'

// function JoinRoom() {
//   const {user} = useAuth();
//   return (
//     <div className="flex items-center justify-center h-screen w-full text-white relative">
//           <div className="h-full w-full z-1 absolute flex flex-col md:flex-row">
//             <motion.div
//               initial={{ x: 0, y: 0 }}
//               animate={{ x: [0, 40, 60, 0], y: [0, -30, 10, 0] }}
//               transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
//               className={`z-99 bg-circle-purple rounded-full h-[12vw] w-[12vw] absolute top-[20%] left-[55%] -translate-x-1/2 -translate-y-1/2`}
//             ></motion.div>
//             <motion.div
//               initial={{ x: 0, y: 0 }}
//               animate={{ x: [0, 40, 60, 0], y: [0, -30, 10, 0] }}
//               transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
//               className={`z-99 bg-circle-green rounded-full h-[12vw] w-[12vw] absolute top-[75%] left-[35%] -translate-x-1/2 -translate-y-1/2`}
//             ></motion.div>
//             <motion.div
//               initial={{ x: 0, y: 0 }}
//               animate={{ x: [0, 40, 60, 0], y: [0, -30, 10, 0] }}
//               transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
//               className={`z-99 bg-circle-purple rounded-full h-[12vw] w-[12vw] absolute top-[85%] left-[90%] -translate-x-1/2 -translate-y-1/2`}
//             ></motion.div>
//             <div className="w-full md:w-1/2 h-[20%] md:h-full flex flex-col items-center justify-center md:items-start md:justify-start pt-[10%] px-[5%]">
//                 <h1 className="text-[10vw] md:text-[4vw] uppercase font-semibold">
//                     Welcome
//                 </h1>
//                 <p className="text-[2.5vw] text-center md:text-left md:text-[1.25vw]">
//                     {'Welcome' + " "+ user.username}
//                     <br />
//                     Immerse yourself in an exciting interactive story where your choices
//                     shape the adventure.
//                 </p>
//             </div>
//             <div className="w-full md:w-1/2 h-[80%] md:h-full flex items-center justify-center">
//               <div
//                 id="login-form"
//                 className="relative w-[65%] h-[75%] flex flex-col items-center justify-center bg-zinc-950 p-1 md:p-1.5 overflow-hidden"
//               >
//                 <div
//                   id="login-form-inside"
//                   className="h-full w-full flex flex-col items-center justify-center py-[10%] relative bg-zinc-950 z-9"
//                 >
//                   <h1 className="capitalize text-[5vw] md:text-[2.5vw] font-semibold">
//                     Join Room
//                   </h1>
//                   <form className="mt-5 md:mt-10 w-full px-[10%]">
//                     <input
//                       type="text"
//                       placeholder="Join Room"
//                       className="bg-black w-full border-[1px] border-white px-6 py-2 md:py-3 rounded-xl text-[3vw] md:text-[1.25vw] placeholder:text-white"
//                     />
//                     <button
//                       id="submit-btn"
//                       className="w-full px-4 py-2 rounded-xl text-[3vw] md:text-[1.5vw] font-semibold border-2 border-white mt-10"
//                     >
//                       Join Room
//                     </button>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//   )
// }

// export default JoinRoom