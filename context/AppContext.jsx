import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AppContext = createContext();

export const AppContextProvider = (props)=>{
    const [token , setToken] = useState(localStorage.getItem('token'));
    const [user , setUser] = useState("");
    const storeTokenInLs = (serverToken) => {
        localStorage.setItem("token", serverToken);
        setToken(serverToken);
    };
    let isLoggedIn = !!token;
    //tackling logout user functionatity;
    const LogOutUser  = ()=>{
        setToken('');
        return localStorage.removeItem('token');   
    }
    const  userAuthentication = async ()=>{
        try {
            const response = await fetch("http://localhost:3000/api/user/data",{
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            if(response.ok){
                const data = await response.json();
                // console.log(data.msg)
                setUser(data.msg);
            }
        } catch (error) {
            console.error('Error to fetching user data')
        }
    }
    useEffect(()=>{
        userAuthentication();
    },[token])
    return(
        <AppContext.Provider value={{isLoggedIn , storeTokenInLs , LogOutUser , user }}>
            {props.children}
        </AppContext.Provider>
    )
}

export const useAuth = ()=>{
    const authContextValue = useContext(AppContext);
    if(!authContextValue){
        throw new Error('useAuth used outside of provider');
    }
    return authContextValue;
}