import axios from "axios";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const navigate = useNavigate();
  // const [email , setEmail] = useState('');
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isEmailSent, setIsEmailSent] = useState("");
  const [otp, setOtp] = useState(0);
  const [isOtpSubmitted, setIsOtpSubmitted] = useState(false);

  const handleInput = (e, index) => {
    if (e.target.value.length > 0 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && e.target.value === "" && index > 0) {
      inputRefs.current[index - 1].focus();
      console.log(inputRefs.current[index - 1].focus());
    }
  };
  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text");
    const pasteArray = paste.split("");
    pasteArray.forEach((char, index) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index].value = char;
      }
    });
  };

  const onSubmitEmail = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/auth/send-reset-otp",
        { email }
      );
      data.success ? toast.success(data.message) : toast.error(data.message);
      data.success && setIsEmailSent(true);
    } catch (error) {
      toast.error(error.message);
    }
  };
  const onSubmitOtp = async (e) => {
    e.preventDefault();
    const otpArray = inputRefs.current.map((e) => e.value);
    setOtp(otpArray.join(""));
    setIsOtpSubmitted(true);
  };
  const onSubmitNewPassword = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/auth/password-reset",
        { email, otp, newPassword }
      );
      data.success ? toast.success(data.message) : toast.error(data.message);
      data.success && navigate("/login");
    } catch (error) {
      toast.error(error.message);
    }
  };
  const inputRefs = useRef([]);
  return (
    <div className="h-screen w-full bg-zinc-950 flex items-center justify-center">
      <div className="flex items-center justify-center min-h-scree">
        {!isEmailSent && (
          <div className="bg-gradient-to-b from-[#18AFE6] to-[#D508E7] p-[2px] rounded-lg">
            <form
              onSubmit={onSubmitEmail}
              method="POST"
              className=" p-8 rounded-lg shadow-lg bg-zinc-950 w-96 text-sm"
            >
              <h1 className="text-white text-2xl font-semibold text-center mb-4">
                Reset Password
              </h1>
              <p className="text-center mb-6 text-indigo-300">
                Enter your email
              </p>
              <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full">
                <input
                  type="email"
                  placeholder="Email_id"
                  className="w-full rounded-lg px-3 py-1 bg-transparent outline-none text-white border-purple border-2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button className="w-full py-2.5 btn rounded-full" type="submit">
                Submit
              </button>
            </form>
          </div>
        )}
        {!isOtpSubmitted && isEmailSent && (
          <div className="bg-gradient-to-b from-[#18AFE6] to-[#D508E7] p-[2px] rounded-lg">
            <form
              onSubmit={onSubmitOtp}
              className=" p-8 rounded-lg shadow-lg  w-96 text-sm"
            >
              <h1 className="text-white text-2xl font-semibold text-center mb-4">
                Reset OTP
              </h1>
              <p
                className="text-center mb-6 text-indigo-300"
                onPaste={handlePaste}
              >
                Enter the 6digit code sent to your email
              </p>
              <div className="flex justify-between mb-8">
                {Array(6)
                  .fill(0)
                  .map((_, index) => (
                    <input
                      type="text"
                      maxLength="1"
                      key={index}
                      required
                      className="w-12 text-center h-12 bg-[#333A5C] text-white -text-center text-xl rounded-md"
                      ref={(e) => (inputRefs.current[index] = e)}
                      onInput={(e) => handleInput(e, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                    />
                  ))}
              </div>
              <button className="w-full py-3 btn rounded-full" type="submit">
                Submit
              </button>
            </form>
          </div>
        )}
        {isOtpSubmitted && isEmailSent && (
          <div className="bg-gradient-to-b from-[#18AFE6] to-[#D508E7] p-[2px] rounded-lg">
            <form
              onSubmit={onSubmitNewPassword}
              className="bg-slate-900 p-8 rounded-lg shadow-lg  w-96 text-sm"
            >
              <h1 className="text-white text-2xl font-semibold text-center mb-4">
                New Password
              </h1>
              <p
                className="text-center mb-6 text-indigo-300"
                onPaste={handlePaste}
              >
                Enter your new password
              </p>
              <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full">
                <input
                  type="password"
                  placeholder="New Password"
                  className="bg-transparent outline-none text-white"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </div>
              <button className="w-full py-2.5 btn rounded-full" type="submit">
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
