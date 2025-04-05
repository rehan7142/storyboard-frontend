import React, { useState } from "react";

const story = () => {
  let themes = [
    "https://imgs.search.brave.com/fdAnuYCVvQrvNjSV5YqZeOI9Oeslfa64VaUy3G-5Aw0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9hZXN0aGV0aWMt/YmFja2dyb3VuZC1w/bmctc3RhcnJ5LW5p/Z2h0LXNreV81Mzg3/Ni0xMDI2MjQwLmpw/Zz9zZW10PWFpc19o/eWJyaWQmdz03NDA",
    "https://imgs.search.brave.com/oO3uwgpeDa1HUMQtjkH0PYdsIgNb45y6y5_Bdqe9PVQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vRUFHUElE/VlowLUEvMS8wLzEx/MzF3L2NhbnZhLXBl/YWNoLWFlc3RoZXRp/Yy1iYWNrZ3JvdW5k/LWZseWVyLUlxR0RK/X3NpbXZNLmpwZw",
    "https://imgs.search.brave.com/6Sa_2821DNoUlNXPgKxHQehOb35JZRWFoWnqViOYAX0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9wbmctbWVtcGhp/cy1wYXR0ZXJuLWZy/YW1lLWJhY2tncm91/bmRfNTM4NzYtOTQz/NjYwLmpwZz9zZW10/PWFpc19oeWJyaWQm/dz03NDA",
    "https://imgs.search.brave.com/oOY7mrW-6CGPnZxN-kNH-ZkiaqNNreG3a2N1Gq1dY_c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vRUFHUXNZ/SVEzNGcvMS8wLzEx/MzF3L2NhbnZhLWdy/ZWVuLWFlc3RoZXRp/Yy1wb3N0ZXItcG9y/dHJhaXQtWEppZDFw/U2FIRDAuanBn",
    "https://imgs.search.brave.com/i4oZDDI7alVkD2e9FH2nwdW-3QK6DP7-o_ATOH5gRsE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2I2L2E2/Lzk0L2I2YTY5NDJi/NmNlOWUwODdiYWI5/NjkyZDAzYjM2Mzg5/LmpwZw",
    "https://imgs.search.brave.com/fbXIpFK8gsaTPt7Vsw6OZmQg0fm-8krDHbFcj6hghV4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vRUFGWnRm/dE9ia3cvMS8wLzkw/MHcvY2FudmEtcGlu/ay1hZXN0aGV0aWMt/d2F0ZXJjb2xvci1i/YWNrZ3JvdW5kLXBo/b25lLXdhbGxwYXBl/ci1BSjI1aTRSY05S/RS5qcGc",
  ];

  let [count, setCount] = useState(0)

  return (
    <div
      className={`h-screen w-full px-20 py-10 text-[5vw] font-semibold bg-contain relative`} style={{backgroundImage: `url(${themes[count]})`}}
    >
      <button
        className="text-[1vw] text-medium absolute top-10 right-10 bg-[#964B00] text-white px-3  py-2 border-[1px] border-black"
        onClick={()=>{
          setCount(Math.floor(Math.random()*6))
        }}
      >
        Change Theme
      </button>
    </div>
  );
};

export default story;
