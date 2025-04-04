import { useEffect } from "react"
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AppContext";

const Logout = ()=>{
    const {LogOutUser} = useAuth()
    const navigate = useNavigate();
    useEffect(()=>{
        LogOutUser();
    }, [LogOutUser]);
    return navigate('/login')
}

export default Logout;